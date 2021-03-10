/*
关于csv格式文件的导入、导出时的身份证号处理

EXCEL系统默认，在常规或数值格式下，数字超过10位即以科学计数法显示，对15位以后的数字用0填充。

导入时，对于身份证号自动变成科学计数法的地方，正确显示方法：
1、输入数字前先将单元格格式设置为文本。选定单元格，在其上点鼠标右键——“设置单元格格式”，点“数字”标签——“文本”——“确定”。 不过这种方式在保存一次打开后又会恢复科学计数法形式的。
2、输入数字时先输入一个半角单引号‘。如，'1234567890123456789
在导出文件时需要导出很长的一串数字的解决方法其实很简单，在程序中将要导出的字段前加上"\t"即可，亲测有效。
*/
'use strict';

const fs = require('fs');
const moment = require('moment');
const ReadPreference = require('mongodb').ReadPreference;
const ObjectID = require('mongodb').ObjectID;
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const writeSync = (ws, data) => {
    return new Promise((resolve, reject) => {
        ws.write(data, err => {
            err ? reject(err) : resolve({});
        });
    });
};
const formatCsvContent = str => {
    if (str === undefined) {
        return '';
    }
    return str.replace(/,/g, '，').replace(/\r\n/g, '').replace(/\n/g, '');
};
const readPref = ['primary', 'primaryPreferred', 'secondary', 'secondaryPreferred', 'nearest'];
const mongodbOption = { readPreference: readPref.indexOf(process.env.MONGODB_READ_PERFERENCE) >= 0 ? process.env.MONGODB_READ_PERFERENCE : readPref[0], useUnifiedTopology: true };

MongoClient.connect('mongodb:/yuncs.com:3717,dds-8s.com:3717/crm?replicaSet=mgset-500004965/crm', mongodbOption, async (err, client) => {
    if (err) {
        console.error('connect to mongoCrm failed! error:', err);
        return process.exit(1);
    }
    const crmDb = client.db('crm');
    crmDb.c = c => crmDb.collection(c);
    console.log('[MongoDB] connect success!');
    const list1 = await crmDb.c('studentlog').find({ operation: "edit", 'content.baseInfoChange.label': "学员姓名" }, { readPreference: ReadPreference.SECONDARY_PREFERRED }).toArray();
    console.log('修改过学员姓名的数量', list1.length);
    const list2 = await crmDb.c('studentlog').find({ operation: "edit", 'content.baseInfoChange.label': "证件号" }, { readPreference: ReadPreference.SECONDARY_PREFERRED }).toArray();
    console.log('修改过证件号的数量', list2.length);
    const ids1 = list1.map(item => item.studentId);
    const ids2 = list2.map(item => item.studentId);
    const map1 = {};
    const map2 = {};
    list1.forEach(item => {
        map1[item.studentId] = item;
    });
    list2.forEach(item => {
        map2[item.studentId] = item;
    });
    let uniqIds = [...new Set([...ids1, ...ids2])];
    uniqIds = uniqIds.map(item => ObjectID(item));

    const students = await crmDb.c('student').find({ _id: { $in: uniqIds }, status: 'deal' }).toArray();
    const total = students.length;
    console.log('student count', total);
    let i = 0;
    const ws = fs.createWriteStream("./studentList.csv", { encoding: 'utf8' });
    const headers = ['学员手机号', '修改前姓名', '修改后姓名', '操作人', '操作时间', '操作人业务部门', '修改前证件号', '修改后证件号', '操作人', '操作时间', '操作人业务部门'];
    await writeSync(ws, '\uFEFF' + headers.join(',') + '\r\n');
    for (const stu of students) {
        const mobile = stu.mobile || '-';
        const nameLogObj = map1[stu._id] && map1[stu._id].content.baseInfoChange.find(item => item.label === '学员姓名');
        const beforeName = nameLogObj ? nameLogObj.ov : '无';
        const afterName = nameLogObj ? nameLogObj.nv : stu.name;
        const operatorName = map1[stu._id] ? map1[stu._id].operator.name : '无';
        const operatorDepartment = map1[stu._id] ? map1[stu._id].operator.department.name : '无';
        const operateTime = map1[stu._id] && moment(map1[stu._id].createdAt).format('YYYY-MM-DD HH:mm:ss') || '无';

        const idObj = map2[stu._id] && map2[stu._id].content.baseInfoChange.find(item => item.label === '证件号');
        const beforeId = idObj ? "\t"+idObj.ov : '无';
        const afterId = idObj ? "\t"+idObj.nv : '无';
        const operatorName1 = map2[stu._id] ? map2[stu._id].operator.name : '无';
        const operatorDepartment1 = map2[stu._id] ? map2[stu._id].operator.department.name : '无';
        const operateTime1 = map2[stu._id] && moment(map2[stu._id].createdAt).format('YYYY-MM-DD HH:mm:ss') || '无';

        let content = [mobile, beforeName, afterName, operatorName, operateTime, operatorDepartment, beforeId, afterId, operatorName1, operateTime1, operatorDepartment1];
        content = content.map(v => formatCsvContent(v.toString()));
        await writeSync(ws, content.join(',') + '\r\n');
        i++;
        console.log(`${i}/${total} done.`);
    }
    ws.close();
    process.exit(0);
});