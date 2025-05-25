"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = findById;
function findById(items, id) {
    return items.find(item => item.id === id);
}
