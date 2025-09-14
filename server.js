// Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const budget = require('./budget.json');
app.use('/', express.static('public'));

// const budget = {
//     myBudget: [
//         {
//             title: 'Eat out',
//             budget: 25
//         },
//         {
//             title: 'Rent',
//             budget: 275
//         },
//         {
//             title: 'Groceries',
//             budget: 110
//         },
//         {
//             title: 'Utilities',
//             budget: 150
//         },
//         {
//             title: 'Phone',
//             budget: 45
//         },
//         {
//             title: 'Car',
//             budget: 150
//         },
//         {
//             title: 'Gas',
//             budget: 65
//         },
//         {
//             title: 'Savings',
//             budget: 150
//         },
//         {
//             title: 'Netflix Subscription',
//             budget: 90
//         },
//         {
//             title: 'Eating out fund',
//             budget: 200
//         },
//     ]
// };


app.get('/hello', (req, res) => {
    res.send("Hello World!");
});

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});