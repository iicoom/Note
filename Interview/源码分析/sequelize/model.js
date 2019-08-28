class Model {

    static init(attributes, options) {
        options = options || {};

        if (!options.sequelize) {
            throw new Error('No Sequelize instance passed');
        }

        this.sequelize = options.sequelize;
    }
}

// 使用
class Employee extends Model {}
Employee.init({
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    get() {
      const title = this.getDataValue('title');
      // 'this' allows you to access attributes of the instance
      return this.getDataValue('name') + ' (' + title + ')';
    },
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    set(val) {
      this.setDataValue('title', val.toUpperCase());
    }
  }
}, { sequelize, modelName: 'employee' });

Employee
  .create({ name: 'John Doe', title: 'senior engineer' })
  .then(employee => {
    console.log(employee.get('name')); // John Doe (SENIOR ENGINEER)
    console.log(employee.get('title')); // SENIOR ENGINEER
  })


// Timestamps
// By default, Sequelize will add the attributes createdAt and updatedAt to your mode

// Validations
class ValidateMe extends Model {}
ValidateMe.init({
  bar: {
    type: Sequelize.STRING,
    validate: {
      is: ["^[a-z]+$",'i'],     // will only allow letters
      is: /^[a-z]+$/i,          // same as the previous example using real RegExp
      not: ["[a-z]",'i'],       // will not allow letters
      isEmail: true,            // checks for email format (foo@bar.com)
      isUrl: true,              // checks for url format (http://foo.com)
      isIP: true,               // checks for IPv4 (129.89.23.1) or IPv6 format
      isIPv4: true,             // checks for IPv4 (129.89.23.1)
      isIPv6: true,             // checks for IPv6 format
      isAlpha: true,            // will only allow letters
      isAlphanumeric: true,     // will only allow alphanumeric characters, so "_abc" will fail
    }
 }
}, { sequelize });


/**
 * Import
 */
// You can also store your model definitions in a single file using the import method. 


// in your server file - e.g. app.js
const Project = sequelize.import(__dirname + "/path/to/models/project")

// The model definition is done in /path/to/models/project.js
// As you might notice, the DataTypes are the very same as explained above
module.exports = (sequelize, DataTypes) => {
  class Project extends sequelize.Model { }
  Project.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, { sequelize });
  return Project;
}


module.exports = (sequelize, DataTypes) => {
    return sequelize.define('class_group', {
        id         : {
            type         : DataTypes.INTEGER,
            primaryKey   : true,
            autoIncrement: true
        },
        name       : DataTypes.STRING,
        class_id   : DataTypes.INTEGER,
        create_time: {
            type: DataTypes.DATE,
            get : function (){
                let val = this.getDataValue('create_time');
                return val ? moment(val).format('X') : val;
            }
        }
    }, {timestamps: true, createdAt: 'create_time', updatedAt: false, deleteAt: false});
};


// Indexes
// Sequelize supports adding indexes to the model definition which will be created 
// during Model.sync() or sequelize.sync.