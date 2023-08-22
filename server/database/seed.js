// seed.js
require('dotenv').config()
const mongoose = require('mongoose');
const Task = require('../models/task');
const dbConnect = require('./db');
dbConnect();

const seedData = [
    {
        title: 'Complete project proposal',
        description: 'Write and submit the project proposal by Friday.',
    },
    {
        title: 'Meeting with clients',
        description: 'Discuss project requirements and scope with clients.',
    },
];

async function seedDatabase() {
    try {
        await Task.deleteMany({}, { timeout: 30000 }); // Increase timeout to 30 seconds
        await Task.insertMany(seedData, { timeout: 30000 }); // Insert new seed data
        console.log('Seed data inserted successfully.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        mongoose.disconnect();
    }
}

seedDatabase();
