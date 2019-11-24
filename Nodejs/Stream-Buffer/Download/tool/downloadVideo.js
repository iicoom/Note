// const cheerio = require('cheerio');
const fs = require('fs');
const request = require('request');
// const superagent = require('superagent');
const data = require('../json/beauty1.json');


let TotalCount = 1;
let finishCount = 0;

// const getYou = function (folder, url, filename, callback) {
//
//     // return new Promise((resolve, reject) => {
//     //
//     // })
//     const dirPath = `video/${folder}/`;
//     if (!fs.existsSync(dirPath)) {
//         fs.mkdirSync(dirPath);
//     }
//
//     console.log('开始下载第' + TotalCount + '个视频  ' + filename + ' 地址: ' + url);
//
//     const writeStream = fs.createWriteStream(dirPath+filename);
//
//     const req = superagent.get(url)
//     req.pipe(writeStream);
//
//     writeStream.on('close', function() {
//         callback(filename);
//     })
// }

const getYou = function (folder, url, filename) {

    return new Promise((resolve, reject) => {

        const dirPath = `video/${folder}/`;
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);
        }

        let httpStream = request({
            url: url,
            method: 'GET',
        });

        const writeStream = fs.createWriteStream(dirPath+filename);

        httpStream.pipe(writeStream);

        let totalLength = 0;

        // 当获取到第一个HTTP请求的响应获取
        httpStream.on('response', (response) => {
            // console.log('response headers is: ', response.headers);
            console.log(`当前连接数: ${TotalCount}  开始下载: ${filename}  地址:  ${url}`);
            TotalCount++;
        });

        // httpStream.on('data', (chunk) => {
        //     totalLength += chunk.length;
        //     console.log('recevied data size: ' + totalLength + 'KB');
        // });

        writeStream.on('close', function() {
            finishCount++;
            console.log('第' + finishCount + '个视频  ' + filename + '  下载完成')
        })

    })
}



// 开始下载
data.result.forEach((item) => {
    const folder = item.title;
    item.contentList.forEach((index) => {
        const url = index.video;
        const filename = `${index.title}.mp4`;
        getYou(folder, url, filename)
    })
})

