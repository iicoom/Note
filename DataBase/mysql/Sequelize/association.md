http://docs.sequelizejs.com/manual/associations.html

1. BelongsTo
2. HasOne
3. HasMany
4. BelongsToMany

## Source & Target
```
class User extends Model {}
User.init({
  name: Sequelize.STRING,
  email: Sequelize.STRING
}, {
  sequelize,
  modelName: 'user'
});

class Project extends Model {}
Project.init({
  name: Sequelize.STRING
}, {
  sequelize,
  modelName: 'project'
});

User.hasOne(Project);
```
User model (the model that the function is being invoked on) is the source. Project model (the model being passed as an argument) is the target.


## 使用
### 表结构
CREATE TABLE `class` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL COMMENT '名称',
  `desc` varchar(500) NOT NULL DEFAULT '' COMMENT '描述',
  `company_id` int(10) NOT NULL DEFAULT '0' COMMENT '公司ID',
  `enrollment_num` int(11) NOT NULL DEFAULT '0' COMMENT '开学签到人数',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;


CREATE TABLE `class_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `class_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `is_master` smallint(1) NOT NULL DEFAULT '0' COMMENT '是否管理组',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

### sequelize model 建立关联
```
class Class extends Base {

    // findOne
    async getDetailById(class_id){
      ClassModel.hasMany(ClassGroupModel, { foreignKey: 'class_id' });
      let detail = await ClassModel.findOne({ where: {id: class_id}, include: [ ClassGroupModel ]})
      if (!detail){
        return null;
      }
      return detail;
    }

    // findList
    async getList(){
      ClassModel.hasMany(ClassGroupModel, { foreignKey: 'class_id' });
      let list = await ClassModel.findAll({ include: [ ClassGroupModel ]})
      return list;
    }
}
```
// findOne
{
    "status": 0,
    "msg": "请求成功",
    "error": "",
    "data": {
        "id": 5,
        "name": "xx学院",
        "status": 1,
        "class_groups": [
            {
                "create_time": "1541564317",
                "id": 1,
                "name": "小组1",
                "class_id": 5
            },
            {
                "create_time": "1544766460",
                "id": 2,
                "name": "赋能1",
                "class_id": 5
            },
        ]
    },
    "time": "1567419803",
    "request_id": "e639b7a47f284c7dbb21404b6407edb5"
}

// findList
{
    "status": 0,
    "msg": "请求成功",
    "error": "",
    "data": [
        {
            "id": 5,
            "name": "ll学院",
            "desc": "ll学院描述",
            "company_id": 2,
            "status": 1,
            "class_groups": [
                {
                    "create_time": "1541564317",
                    "id": 1,
                    "name": "小组1",
                    "class_id": 5
                },
                {
                    "create_time": "1544766460",
                    "id": 2,
                    "name": "赋能1",
                    "class_id": 5
                },
            ]
        },
        {
            "id": 10,
            "name": "班级录入测试",
            "desc": "test",
            "status": 1,
            "class_groups": [
                {
                    "create_time": "1547090714",
                    "id": 7,
                    "name": "测试小组录入",
                    "class_id": 10
                }
            ]
        },
    ],
    "time": "1567420193",
    "request_id": "6cd7a42f3cc84dfba2e4d41fc4536a3c"
}

## Foreign Keys

When you create associations between your models in sequelize, foreign key references with constraints will automatically be created. The setup below:
```
class Task extends Model {}
Task.init({ title: Sequelize.STRING }, { sequelize, modelName: 'task' });
class User extends Model {}
User.init({ username: Sequelize.STRING }, { sequelize, modelName: 'user' });

User.hasMany(Task);   // Will add userId to Task model
Task.belongsTo(User); // Will also add userId to Task model
```

### One-To-One associations
One-To-One associations are associations between exactly two models connected by a single foreign key.

####  BelongsTo
```
class Player extends Model {}
Player.init({/* attributes */}, { sequelize, modelName: 'player' });
class Team extends Model {}
Team.init({/* attributes */}, { sequelize, modelName: 'team' });

Player.belongsTo(Team); // Will add a teamId attribute to Player to hold the primary key value for Team
```

- Foreign keys
By default the foreign key for a belongsTo relation will be generated from the target model name and the target primary key name.
```
class User extends Model {}
User.init({/* attributes */}, { sequelize, modelName: 'user' })
class Company extends Model {}
Company.init({/* attributes */}, { sequelize, modelName: 'company' });

// will add companyId to user
User.belongsTo(Company);
```

- Target keys
By default the target key for a belongsTo relation will be the target model's primary key. To define a custom column, use the targetKey option.

```
class User extends Model {}
User.init({/* attributes */}, { sequelize, modelName: 'user' })
class Company extends Model {}
Company.init({/* attributes */}, { sequelize, modelName: 'company' });

User.belongsTo(Company, {foreignKey: 'fk_companyname', targetKey: 'name'}); 
// Adds fk_companyname to User
```

#### HasOne
