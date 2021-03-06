const bcrypt = require("bcrypt")

module.exports = function(sequelize, DataTypes) {

  let Employee = sequelize.define("Employee", {
    name: {type: DataTypes.STRING, allowNull:false},
    start_date: DataTypes.DATEONLY,
    end_date: DataTypes.DATEONLY,
    manager: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    username: {type: DataTypes.STRING, allowNull:false},
    password: {type: DataTypes.STRING, allowNull:false}

},{hooks:{beforeCreate:function(Employee, options){
     var hash = bcrypt.hashSync(Employee.password, 10);
     Employee.password = hash
}}});



  Employee.associate = function(models) {

    Employee.hasMany(models.Hour, {
      onDelete: "cascade"
    });
    Employee.hasMany(models.Timeoff, {
      onDelete: "cascade"
    });
    Employee.hasOne(models.Jobs, {
      onDelete: "cascade"
    });
    Employee.hasOne(models.Salary, {
      onDelete: "cascade"
    });
  };


  return Employee;
};
