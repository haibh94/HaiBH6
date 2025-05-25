"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const user_1 = require("./user");
const projectManager_1 = require("./projectManager");
const utils_1 = require("./utils");
const guards_1 = require("./guards");
const notification_service_1 = require("./notification.service");
const users = [
    { id: 1, name: 'HaiBH6', email: 'haibh6@fpt.com', role: enums_1.Role.ADMIN, status: 'ACTIVE' },
    { id: 2, name: 'BHH6', email: 'bhh6@fpt.com', role: enums_1.Role.DEVELOPER, status: 'ACTIVE' },
    { id: 3, name: 'Bui Hoang Hai', email: 'buihoanghai@fpt.com', role: enums_1.Role.MANAGER, status: 'INACTIVE' },
];
users.forEach(u => console.log((0, user_1.describeUser)(u)));
const project = {
    id: 101,
    name: 'Alpha Project',
    members: [],
};
const manager = new projectManager_1.ProjectManager();
manager.addProject(project);
manager.addUserToProject(101, users[0]);
manager.addUserToProject(101, users[1]);
manager.addUserToProject(101, users[1]); // Duplicate, should not add again
console.log(manager.listProjects());
const found = (0, utils_1.findById)(users, 2);
if (found) {
    console.log(`Found: ${found.name}`);
}
if ((0, guards_1.isAdmin)(users[0])) {
    console.log(`${users[0].name} is an admin`);
}
const notifier = new notification_service_1.ConsoleNotificationService();
notifier.notify('System initialized.');
