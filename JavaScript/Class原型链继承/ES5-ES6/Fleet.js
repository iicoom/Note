const DB = require('./DB')

const SCHEMA = {
  id: 'integer',
  creator: 'string',
  badge: 'string',
  manifesto: 'string',
  name: 'string',
  contributed_point: 'integer',
  level: 'integer',
  number: 'integer',
  create_time: 'integer',
  apply_limit_approval: 'integer',
  apply_limit_score: 'integer',
  leader: 'string',
  assistant: 'array',
  active_this_week: 'integer',
  active_last_week: 'integer',
  vacancy: 'integer',
  members: 'object',
  apply_list: 'object',
  badges: 'array',
  next_recruit_time: 'integer',
  logs: 'array'
};

const Fleet = function(db) {
  this._db = new DB(db, 'data_fleet', SCHEMA);
};

Fleet.prototype.query = async function(schema, query, options) {
  return await this._db.query(schema, query, options);
};

// 调用
let fleet = new Fleet(MF.GameMysql);
fleet.query({'id': 1}, {name: params.name}, {limit: 1})