## 官方 Model definition
To define mappings between a model and a table, use the define method. Each column must have a datatype, see more about datatypes.

class Project extends Model {}
Project.init({
  title: Sequelize.STRING,
  description: Sequelize.TEXT
}, { sequelize, modelName: 'project' });


## Sequelize 默认时间字段
```
module.exports = app => {
  const { STRING, INTEGER, DATE, JSON } = app.Sequelize;

  const Groups = app.model.define('groups', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    member: JSON,
    created_at: DATE,
    updated_at: DATE,
  });

  return Groups;
};
```
即使model中没有定义created_at、updated_at 也需要在数据库建表时有这俩个字段 否则查询提示不存在这2个filed

