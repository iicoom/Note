## 全局model变量
global.model = require('../models/index');

## index
const Sequelize = require('sequelize');

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

然后把所有model文件都挂在全局变量model上
module.exports = model

## service
在service导入model
```
const { SnipComModel, ManagerModel } = model
const Base                                   = require('./base');

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





