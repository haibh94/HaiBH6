const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/users.json');

const readData = () => {
    if (!fs.existsSync(dataPath)) return [];
    return JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
};

const writeData = (data) => {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

exports.getAll = (req, res) => {
    const users = readData();
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(users));
};

exports.getById = (req, res) => {
    const id = req.url.split('/').pop();
    const users = readData();
    const user = users.find(u => u.id === id);
    res.setHeader('Content-Type', 'application/json');
    if (user) {
        res.end(JSON.stringify(user));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'User not found' }));
    }
};

exports.create = (req, res) => {
    const users = readData();
    const newUser = req.body;
    newUser.id = Date.now().toString();
    users.push(newUser);
    writeData(users);
    res.statusCode = 201;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(newUser));
};

exports.update = (req, res) => {
    const id = req.url.split('/').pop();
    const users = readData();
    const index = users.findIndex(u => u.id === id);
    if (index === -1) {
        res.statusCode = 404;
        return res.end(JSON.stringify({ error: 'User not found' }));
    }
    users[index] = { ...users[index], ...req.body };
    writeData(users);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(users[index]));
};

exports.remove = (req, res) => {
    const id = req.url.split('/').pop();
    let users = readData();
    const index = users.findIndex(u => u.id === id);
    if (index === -1) {
        res.statusCode = 404;
        return res.end(JSON.stringify({ error: 'User not found' }));
    }
    const deletedUser = users.splice(index, 1)[0];
    writeData(users);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(deletedUser));
};