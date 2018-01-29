export class Utility {

  static __Instance;
  constructor() {
    this._TempSaveContent = {};
  }

  /**
   * 实例
   * @returns {*}
   */
  static instance() {
    if (this.__Instance === null || typeof this.__Instance === 'undefined') {
      this.__Instance = new this();
    }
    return this.__Instance;
  }

  /**
   * 页面跳转
   *
   * @static
   * @param {any} url 地址
   * @param {any} params 参数
   * @returns
   * @memberof Utility
   * 是把要跳转的页面信息即 url params push到history数组中
   */
  static toPage(url, params) {
    if (!url) {
      return;
    }
    const history = Utility.getContent(Utility.constItem.keyHistory);
    if (!history) {
      return;
    }
    const search = stringify(Object.assign({}, params || {}, { timestamp: new Date().getTime() }));
    history.push({ pathname: url, search });
  }

   /**
    * 设置内容,这里主要是用来存放临时数据的。
    * @method _SetContent
    * @param key  键值，用于下次的时候获取内容用的。其实就是 _TempSaveContent的属性名称。
    * @param content 要存储的内容
    * @param isSaveLocalStorage 是否保存到本地存储里面
    * @private
    */
  static setContent(key, content, isSaveLocalStorage) {
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
  static getContent(key) {
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

}