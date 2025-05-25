"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = isAdmin;
const enums_1 = require("./enums");
function isAdmin(user) {
    return user.role === enums_1.Role.ADMIN;
}
