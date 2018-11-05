
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Employees', [{
        name: 'Jimmy',
        start_date: '2018-03-01', 
        email: 'amcaron1@msn.com',
        username: "jimmy", 
        password: 'password',
        manager: 0,
        createdAt: new Date(), 
        updatedAt: new Date(),
      }, {
        name: 'Reed',
        start_date: '2018-02-04', 
        email: 'amcaron1@msn.com',
        username: "reed", 
        password: 'password',
        manager: 0,
        createdAt: new Date(), 
        updatedAt: new Date(),
      }, {
        name: 'Rachel',
        start_date: '2018-08-12', 
        email: 'Rachel@email.com',
        username: "rachel", 
        password: 'password',
        manager: 0,
        createdAt: new Date(), 
        updatedAt: new Date(),
      }, {
        name: 'Minnie',
        start_date: '2017-11-13', 
        email: 'Minnie@email.com',
        username: "minnie", 
        password: 'password',
        manager: 0,
        createdAt: new Date(), 
        updatedAt: new Date(),
      }, {
        name: 'Thomas',
        start_date: '2017-12-21', 
        email: 'Thomas@email.com',
        username: "jimmy", 
        password: 'password',
        manager: 0,
        createdAt: new Date(), 
        updatedAt: new Date(),
      }, {
        name: 'Charlie',
        start_date: '2018-06-11', 
        email: 'Charlie@email.com',
        username: "charlie", 
        password: 'password',
        manager: 1,
        createdAt: new Date(), 
        updatedAt: new Date(),
      }, {
        name: 'Kaitlyn',
        start_date: '2018-03-15', 
        email: 'Kaitlyn@email.com',
        username: "kaitlyn", 
        password: 'password',
        manager: 0,
        createdAt: new Date(), 
        updatedAt: new Date(),
      }, {
        name: 'Tia',
        start_date: '2018-09-01', 
        end_date: '2018-11-02',
        email: 'Tia@email.com',
        username: "tia", 
        password: 'password',
        manager: 0,
        createdAt: new Date(), 
        updatedAt: new Date(),
      }, {
        name: 'Joan',
        start_date: '2018-04-15', 
        email: 'Joan@email.com',
        username: "joan", 
        password: 'password',
        manager: 0,
        createdAt: new Date(), 
        updatedAt: new Date(),
      }, {
        name: 'Britney',
        start_date: '2018-05-19', 
        email: 'Britney@email.com',
        username: "britney", 
        password: 'password',
        manager: 1,
        createdAt: new Date(), 
        updatedAt: new Date(),
      }])

.then(hoursSeed => {
       queryInterface.bulkInsert('Hours', [{
        employeeId: 1, 
        timein: '2018-10-29 08:01:02', 
        timeout: '2018-10-29 17:05:03',
      }, {  
        employeeId: 1, 
        timein: '2018-10-30 08:01:02', 
        timeout: '2018-10-30 17:05:03',
      }, { 
        employeeId: 1, 
        timein: '2018-10-31 08:01:02', 
        timeout: '2018-10-31 17:05:03',
      }, {     
        employeeId: 1, 
        timein: '2018-11-01 08:01:02', 
        timeout: '2018-11-01 17:05:03',
      }, {                    
        employeeId: 1, 
        timein: '2018-11-02 08:01:02', 
        timeout: '2018-11-02 17:05:03',
      }, {    
        employeeId: 2, 
        timein: '2018-05-07 07:01:02', 
        timeout: '2018-05-07 16:05:03',
      }, {   
        employeeId: 2, 
        timein: '2018-05-08 07:01:02', 
        timeout: '2018-05-08 16:05:03',
      }, {         
        employeeId: 2, 
        timein: '2018-05-09 07:01:02', 
        timeout: '2018-05-09 16:05:03',
      }, {         
        employeeId: 2, 
        timein: '2018-05-10 07:01:02', 
        timeout: '2018-05-10 16:05:03',
      }, {        
        employeeId: 2, 
        timein: '2018-05-11 07:01:02', 
        timeout: '2018-05-11 16:05:03',
      }, {     
        employeeId: 2, 
        timein: '2018-06-18 07:01:02', 
        timeout: '2018-06-18 16:05:03',
      }, {   
        employeeId: 2, 
        timein: '2018-06-19 07:01:02', 
        timeout: '2018-06-19 16:05:03',
      }, {   
        employeeId: 2, 
        timein: '2018-06-20 07:01:02', 
        timeout: '2018-06-20 16:05:03',
      }, {   
        employeeId: 2, 
        timein: '2018-06-21 07:01:02', 
        timeout: '2018-06-21 16:05:03',
      }, {   
        employeeId: 2, 
        timein: '2018-06-22 07:01:02', 
        timeout: '2018-06-22 16:05:03',
      }, {   
        employeeId: 2, 
        timein: '2018-08-23 07:01:02', 
        timeout: '2018-08-23 16:05:03',
      }, {   
        employeeId: 2, 
        timein: '2018-08-23 07:01:02', 
        timeout: '2018-08-23 16:05:03',
      }, {   
        employeeId: 2, 
        timein: '2018-08-24 07:01:02', 
        timeout: '2018-08-24 16:05:03',
      }, {   
        employeeId: 2, 
        timein: '2018-08-25 07:01:02', 
        timeout: '2018-08-25 16:05:03',
      }, {   
        employeeId: 2, 
        timein: '2018-10-29 07:01:02', 
        timeout: '2018-10-29 16:05:03',
      }, {   
        employeeId: 2, 
        timein: '2018-10-30 07:01:02', 
        timeout: '2018-10-30 16:05:03',
      }, {   
        employeeId: 2, 
        timein: '2018-10-31 07:01:02', 
        timeout: '2018-10-31 16:05:03',
      }, {   
        employeeId: 2, 
        timein: '2018-11-01 07:01:02', 
        timeout: '2018-11-01 16:05:03',
      }, {   
        employeeId: 2, 
        timein: '2018-11-02 07:01:02', 
        timeout: '2018-11-02 16:05:03',

        
      }])
  })


}};

