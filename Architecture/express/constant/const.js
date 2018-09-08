global.MY_CONST= 'global const';

function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

define("PI", 3.14);
define("CaptchaType", {
    SMS: 'SMS', // 短信
    VoiceCode: 'VoiceCode' // 语音
});
