'use strict';

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('lesson', {
        id            : {
            type         : DataTypes.INTEGER,
            primaryKey   : true,
            autoIncrement: true
        },
        title         : DataTypes.STRING,
        desc          : DataTypes.STRING,
        doc           : DataTypes.TEXT,
        tutor_id      : DataTypes.INTEGER,
        tutor_name    : DataTypes.STRING,
        tutor_avatar  : DataTypes.STRING,
        origin_video  : DataTypes.JSON,
        high_video    : DataTypes.JSON,
        main_video    : DataTypes.JSON,
        baseline_video: DataTypes.JSON,
        audio         : DataTypes.JSON,
        ppt_img       : DataTypes.JSON,
        status        : DataTypes.SMALLINT,
        extend        : DataTypes.JSON,
        create_time   : {
            type: DataTypes.DATE,
            get : function (){
                let val = this.getDataValue('create_time');
                return val ? moment(val).format("X") : val;
            }
        },
        update_time   : {
            type: DataTypes.DATE,
            get : function (){
                let val = this.getDataValue('update_time');
                return val ? moment(val).format("X") : val;
            }
        }
    }, {timestamps: true, createdAt: 'create_time', updatedAt: false, deleteAt: false});
};

/**
 * CREATE TABLE `lesson` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `title` varchar(200) NOT NULL DEFAULT '' COMMENT '课程标题',
    `doc` text COMMENT '课程文稿',
    `tutor_id` int(11) NOT NULL DEFAULT '0' COMMENT '导师id',
    `tutor_name` varchar(20) NOT NULL DEFAULT '' COMMENT '导师姓名',
    `tutor_avatar` varchar(20) NOT NULL DEFAULT '' COMMENT '导师头像',
    `origin_video` json DEFAULT NULL COMMENT '原始音视频数据{ url, size, duration, width, height }',
    `high_video` json DEFAULT NULL COMMENT '高分辨率{ url, size, duration, width, height }',
    `main_video` json DEFAULT NULL COMMENT '标准分辨率{ url, size, duration, width, height }',
    `baseline_video` json DEFAULT NULL COMMENT '低分辨率{ url, size, duration, width, height }',
    `audio` json DEFAULT NULL COMMENT '音频{ url, size, duration }',
    `ppt_img` json DEFAULT NULL COMMENT 'ppt图片数组',
    `status` smallint(2) NOT NULL DEFAULT '1' COMMENT '状态：1正常',
    `extend` json DEFAULT NULL COMMENT '扩展数据',
    `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    `desc` varchar(500) NOT NULL DEFAULT '' COMMENT '课程描述',
    PRIMARY KEY (`id`)
  ) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4;
 */


// BEGIN;
// INSERT INTO `lesson` VALUES (
//     1, 
//     '测试字体各种字体', 
//     '<h3>济等的成熟，不是全靠自己、不与 </p><p> </p>', 
//     33, 
//     '悔吉', 
//     '', 
//     '{\"url\": \"https://video.fnxy.net.cn/f4qoe1vlr47.mp4\", \"size\": 141973428, \"width\": 1920, \"height\": 1080, \"duration\": 530.76}', 
//     '{\"url\": \"https://video.fnxy.net.cn/ct7tqdgz32_37475369da26a4fcbdc8548013bb8c8f.mp4\", \"size\": 1342343, \"width\": 544, \"height\": 960, \"duration\": 11}', 
//     '{\"url\": \"https://video.fnxy.net.cn/ct7tqdgz32_a2b927e7a301b4903bd887a697e49a79.mp4\", \"size\": 1353323, \"width\": 544, \"height\": 960, \"duration\": 11}', 
//     '{\"url\": \"https://video.fnxy.net.cn/ct7tqdgz32_81f9e99229d83c66a4de5b070d1929bd.mp4\", \"size\": 1620968, \"width\": 544, \"height\": 960, \"duration\": 11}', 
//     '{\"url\": \"https://video.fnxy.net.cn/ct7tqdgz32_0934cb441d0b938b792c3550f0c30981.mp3\", \"size\": 180623, \"duration\": 11}', 
//     '[\"https://static.fnxy.net.cn/hfh1k5hp6xw.jpeg\", \"https://static.fnxy.net.cn/hrjqoo00psf.jpeg\", \"https://static.fnxy.net.cn/lwwp0hwy9e.jpeg\", \"https://static.fnxy.net.cn/9tkhsab7lat.jpeg\", \"https://static.fnxy.net.cn/lkb9hbnpbyj.jpeg\", \"https://static.fnxy.net.cn/ubp6sq4zzs.jpeg\", \"https://static.fnxy.net.cn/sixguo1muvk.jpeg\", \"https://static.fnxy.net.cn/ev75htzvtlf.jpeg\", \"https://static.fnxy.net.cn/bcbxt4hyt0o.jpeg\"]', 
//     1, 
//     '{\"transcode_request_id\": \"337C6202-1BC2-4D69-A2F1-8FC348A2BBAF\"}', 
//     '2018-12-14 19:22:46', 
//     '2019-04-29 15:36:01', 
//     '测试'
//     );
// COMMIT;