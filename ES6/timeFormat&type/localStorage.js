// https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage
// localStorage 属性允许你访问一个 local Storage 对象。localStorage 与 sessionStorage 相似。
// 不同之处在于，存储在 localStorage 里面的数据没有过期时间（expiration time），
// 而存储在 sessionStorage 里面的数据会在浏览器会话（browsing session）结束时被清除，即浏览器关闭时。

localStorage.setItem('myCat', 'Tom');
var currentColor = localStorage.getItem('myCat');

Storage.removeItem() //接受一个参数——你想要移除的数据项的键，然后会将对应的数据项从域名对应的存储对象中移除。
Storage.clear() //不接受参数，只是简单地清空域名对应的整个存储对象。

/**
    * 设置内容,这里主要是用来存放临时数据的。
    * @method _SetContent
    * @param key  键值，用于下次的时候获取内容用的。其实就是 _TempSaveContent的属性名称。
    * @param content 要存储的内容
    * @param isSaveLocalStorage 是否保存到本地存储里面
    * @private
    */
  function setContent(key, content, isSaveLocalStorage) {
    try {
      const self = this.instance();
      if (isSaveLocalStorage) {
        let __Content = content;
        __Content = JSON.stringify(__Content);
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, __Content);
        }
      }
      self._TempSaveContent[key] = content;
    } catch (ex) {
      console.log(ex);
    }
  }
/**
   * 获取内容，
   * @method _GetContent
   * @param key 健名称。其实就是 _TempSaveContent的属性名称。
   * @return {*} 返回内容
   * @private
   */
  function getContent(key) {
    try {
      let __Content = null;
      const __self = this.instance();
      if (__self._TempSaveContent[key]) {
        __Content = __self._TempSaveContent[key];
        return __Content;
      }
      if (typeof window === 'undefined') {
        return null;
      }
      if (__Content === null || typeof __Content === 'undefined') {
        const _value = window.localStorage.getItem(key);
        if (_value !== null && _value !== '' && typeof _value !== 'undefined') {
          const __JSONValue = JSON.parse(_value);
          __self._TempSaveContent[key] = __JSONValue;
          __Content = __self._TempSaveContent[key];
        }
      }

      return __Content;
    } catch (ex) {
      console.log(ex);
      return null;
    }
  }

