import { Role } from './enums';
import { User, describeUser } from './user';
import { Project } from './project';
import { ProjectManager } from './projectManager';
import { findById } from './utils';
import { isAdmin } from './guards';
import {ConsoleNotificationService} from "./notification.service";

const users: User[] = [
    { id: 1, name: 'HaiBH6', email: 'haibh6@fpt.com', role: Role.ADMIN, status: 'ACTIVE' },
    { id: 2, name: 'BHH6', email: 'bhh6@fpt.com', role: Role.DEVELOPER, status: 'ACTIVE' },
    { id: 3, name: 'Bui Hoang Hai', email: 'buihoanghai@fpt.com', role: Role.MANAGER, status: 'INACTIVE' },
];

users.forEach(u => console.log(describeUser(u)));

const project: Project = {
    id: 101,
    name: 'Alpha Project',
    members: [],
};

const manager = new ProjectManager();
manager.addProject(project);
manager.addUserToProject(101, users[0]);
manager.addUserToProject(101, users[1]);
manager.addUserToProject(101, users[2]);

console.log(manager.listProjects());

const found = findById(users, 2);
if (found) {
    console.log(`Found: ${found.name}`);
}

if (isAdmin(users[0])) {
    console.log(`${users[0].name} is an admin`);
}

const notifier = new ConsoleNotificationService();
notifier.notify('System initialized.');