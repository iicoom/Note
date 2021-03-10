const {promisify} = require('util');

/**
 * MySql DB 类封装 造轮子
 * @param {* mysql 连接} conn 
 * @param {* 表} table_name 
 * @param {*} schema 
 */
let DB = function(conn, table_name, schema) {
  this._execute = promisify(conn.query).bind(conn);
  this._table = table_name;
  this._schema = schema;
};

// CRUD
DB.prototype.query = async function(map, query, opts) {
  let sql = this.sqlize('read', map, query, opts);
  let data = await this._execute(sql.sql, sql.values);
  for (let key in data) {
    data[key] = serializable.db2obj(data[key], this._schema);
  }
  return data;
};

DB.prototype.insert = function(map, opts) {
  let sql = this.sqlize('create', serializable.obj2db(map, this._schema), {}, opts);
  return this._execute(sql.sql, sql.values);
};

DB.prototype.update = function(map, query, opts) {
  let sql = this.sqlize('update', serializable.obj2db(map, this._schema), query, opts);
  return this._execute(sql.sql, sql.values);
};

DB.prototype.delete = function(query, opts) {
  let sql = this.sqlize('delete', {}, query, opts);
  return this._execute(sql.sql, sql.values);
};

const DIALECT = {
  largerThan: '>?',
  lessThan: '<?',
  lessThanOrEqualTo: '<=?',
};

/**
 * 分类组装sql语句
 */
DB.prototype.sqlize = function(type, map, query, opts) {
  let arr = [];
  opts = opts || {};
  let table_name = opts.table_name || this._table;
  let ret = {sql: '', values: []};
  for (let key in query) {
    let str = '';
    if (Array.isArray(query[key])) {
      str = query[key].length > 0 ? `${key} IN (${',?'.repeat(query[key].length).substr(1)})` : '';
      ret.values = ret.values.concat(query[key]);
    } else if (query[key] === null || query[key] === undefined) {
      str = `${key} IS NULL`;
    } else if ((typeof query[key]) === 'object') {
      let node = query[key];
      for (let k in node) {
        str = key + DIALECT[k];
        ret.values.push(node[k]);
      }
    } else {
      str = `${key}=?`;
      ret.values.push(query[key]);
    }
    if (str.length > 0) {
      arr.push(str);
    }
  }


  let setter = [];
  switch (type) {
    case 'create':
      ret.sql = `INSERT INTO ${table_name}(${Object.keys(map).join(',')}) VALUES (${',?'.repeat(Object.keys(map).length).substr(1)})`;
      ret.values = Object.values(map);
      break;
    case 'read':
      ret.sql = `SELECT ${Object.keys(map).join(',')} FROM ${table_name}${(arr.length > 0 ? ` WHERE ${arr.join(' AND ')}` : '')}`;
      arr = [];
      if (opts) {
        if (opts.order_by) {
          ret.sql += ` ORDER BY ${opts.order_by.join(',')}`;
        }
        if (opts.limit) {
          ret.sql += ` LIMIT ${opts.limit}`;
        }
        if (opts.offset) {
          ret.sql += ` OFFSET ${opts.offset}`;
        }
      }
      break;
    case 'update':
      for (let key in map) {
        setter.push(`${key}=?`);
      }
      ret.sql = `UPDATE ${table_name} SET ${setter.join(',')}${(arr.length > 0 ? ` WHERE ${arr.join(' AND ')}` : '')}`;
      ret.values = [].concat(Object.values(map)).concat(ret.values);
      break;
    case 'delete':
      ret.sql = `DELETE FROM ${table_name}${(arr.length > 0 ? ` WHERE ${arr.join(' AND ')}` : '')}`;
      break;
    default: {
      throw new Error('sqlize');
    }
  }
  for (let i = 0, len = ret.values.length; i < len; ++i) {
    if (ret.values[i] && typeof ret.values[i] === 'object') {
      ret.values[i] = JSON.stringify(ret.values[i]);
    }
  }
  // console.log('--------------sqlize--------------------')
  // console.log(ret.sql);
  // console.dir(ret.values);
  return ret;
};

module.exports = DB;