'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query(
      'SELECT id FROM Users;',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    )
    
    await queryInterface.bulkInsert('Records', [{
      name: '午餐',
      date: new Date('2019-04-23'),
      amount: 60,
      created_at: new Date(),
      updated_at: new Date(),
      user_id: users[Math.floor(Math.random() * users.length)].id,
      category_id: 4
    },
      {
        name: '晚餐',
        date: new Date('2019-04-23'),
        amount: 60,
        created_at: new Date(),
        updated_at: new Date(),
        user_id: users[Math.floor(Math.random() * users.length)].id,
        category_id: 4
      },
      {
        name: '捷運',
        date: new Date('2019-04-23'),
        amount: 120,
        created_at: new Date(),
        updated_at: new Date(),
        user_id: users[Math.floor(Math.random() * users.length)].id,
        category_id: 2
      },
      {
        name: '電影：驚奇隊長',
        date: new Date('2019-04-23'),
        amount: 220,
        created_at: new Date(),
        updated_at: new Date(),
        user_id: users[Math.floor(Math.random() * users.length)].id,
        category_id: 3
      },
      {
        name: '租金',
        date: new Date('2015-04-01'),
        amount: 25000,
        created_at: new Date(),
        updated_at: new Date(),
        user_id: users[Math.floor(Math.random() * users.length)].id,
        category_id: 1
      }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Records', null, {})
  }
};
