import OSS from 'ali-oss';
import axios from 'axios';


/**
 * 生成文件名一个随机值+文件扩展
 * @param {*} originFileName 
 */
export const getKey = originFileName => 
`${Math.random()
    .toString(36)
    .slice(2)}${originFileName.slice(originFileName.lastIndexOf('.'))}`;
// originFileName.slice(originFileName.lastIndexOf('.')) 用于获取文件扩展名


/**
 * 据文件类型获取上传路径
 * @param {*} fileType 
 * @param {*} key 
 */
export const getPath = (fileType, key) => {
    let domain;
    // 分fileType为视频或者其他文件上传不同bucket
    if (fileType === 'video') {
        domain = 'XXX'
    } else {
        domain ='YYY'
    }
    return `${domain}${fileName}`
}

// 上传超过100MB大小的文件
export const multipartUpload = async (name, file, type, progress, onProgress) => {
    
}

