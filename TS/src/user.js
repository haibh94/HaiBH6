"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.describeUser = describeUser;
function describeUser(user) {
    return `User [${user.id}] ${user.name} (${user.email}) - Role: ${user.role}, Status: ${user.status}`;
}
