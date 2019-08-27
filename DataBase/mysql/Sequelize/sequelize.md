## 首先需要建立数据库链接，建库、建表


## 全局model变量
global.model = require('../models/index');

## index
// model/index.js
```
const Sequelize = require('sequelize');

// 方式一
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
})

// 方式二
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')

// 方式三
<!-- connection pool (production) -->
const createDb = db => new Sequelize(db, null, null, {
    dialect,
    logging,
    replication     : { read, write },
    pool            : {
        maxConnections: 8,
        minConnections: 2,
        maxIdleTime   : 300
    },
    define          : {
        freezeTableName: true,
        timestamps     : false
    },
    timezone        : '+08:00',
    operatorsAliases: false
});

let DJ = createDb(db_name);
```
https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor
上面的链接可以查看option各参数的用法

- options.dialect
The dialect of the database you are connecting to. One of mysql, postgres, sqlite and mssql.

- options.replication	
Use read / write replication, Each read/write server can have the following properties: host, port, username, password, database

- options.pool
sequelize connection pool configuration

- options.define 
Default options for model definitions. See Model.init.

- options.timezone
to ensure that the result of NOW, CURRENT_TIMESTAMP and other time related functions have in the right timezone. 

DJ 就是一个 Sequelize 对象的 实例：
Sequelize {
  options:
   { dialect: 'mysql',
     dialectModulePath: null,
     host: 'localhost',
     protocol: 'tcp',
     define: { freezeTableName: true, timestamps: false },
     timezone: '+08:00',
     logging: [Function: bound consoleCall],
     replication: { read: [Array], write: [Object] },
     ssl: undefined,
     pool: { maxConnections: 8, minConnections: 2, maxIdleTime: 300 },
     retry: { max: 5, match: [Array] },
     operatorsAliases: false },
  config:
   { database: 'psych',
     username: null,
     password: null,
     host: 'localhost',
     port: 3306,
     pool: { maxConnections: 8, minConnections: 2, maxIdleTime: 300 },
     protocol: 'tcp',
     native: false,
     ssl: undefined,
     replication: { read: [Array], write: [Object] },
     dialectModulePath: null,
     keepDefaultTimezone: undefined,
     dialectOptions: undefined },
  models:
   { celebration: celebration,
     challenge: challenge,
     challenge_map: challenge_map,
     class: class,
     user_challenge: user_challenge,
     user_class: user_class },
  modelManager:
   ModelManager {
     models:
      [ celebration,
        challenge,
        challenge_map,
        class],
     sequelize: [Circular] },
  importCache:
   { '/Users/guitar/Work/mis-api/models/celebration.js': celebration,
     '/Users/guitar/Work/mis-api/models/challenge.js': challenge,
     '/Users/guitar/Work/mis-api/models/challengeMap.js': challenge_map,
     '/Users/guitar/Work/mis-api/models/userClass.js': user_class },
}

const model = {}
然后fs模块处理model加载
fs.readdirSync(__dirname).filter(jsFilter).forEach(file => {
    const m = teemo['import](path.join(__dirname, file));
    console.log(m)
    <!-- ====== class extends Model {}
    ====== class extends Model {}
    ====== class extends Model {} -->
    console.log('======', m.name)
    <!-- ====== celebration
    ====== challenge
    ====== challenge_map
    ====== class
    ====== class_group
    ====== class_news
    ====== company -->
    let name_arr = m.name.split('_');
    <!-- 处理model名称格式 -->
    let model_name = name_arr.map(s => s.substring(0, 1).toUpperCase() + s.substring(1)).join('') + 'Model';
    <!-- 把每个人间的====== class extends Model {} 挂在model 对应文件名的属性上 -->
    model[model_name] = m;
})

module.exports = (model => {
    <!-- 1. 处理表关联 -->
    ... 

    <!-- 2. 导出model -->
    return model;
})(model)

<!-- 用到的方法 -->
array.filter(condition)
=> ['满足条件的元素'] 

const jsFilter = f => (f.indexOf('.') !== 0) && (f !== index.js) && (f.slice(-3) === '.js');
=> Boolean

Sequelize['import'] 方法 接受 文件路径
=> return sequelize.importCache[path]


## service
在service导入model
```
const { SnipComModel, ManagerModel } = model   此处model已经设置成 全局变量
const Base = require('./base');

class Comments extends Base {
    constructor() {
        super(SnipComModel);

        this.order = [['create_time', 'ASC']];
    }

    async getList(params) {
        let include = [{
            association: SnipComModel.belongsTo(ManagerModel, {
                foreignKey: 'user_id',
                targetKey : 'id'
            })
        }];
        console.log('getList-param', params)
        // getList-param { snippet_id: '8', page: 1, limit: 20 }

        return await super.getList(params, include);
    }
}

module.exports = Comments;
```

### 关联查询







