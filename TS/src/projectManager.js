"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectManager = void 0;
class ProjectManager {
    constructor() {
        this.projects = [];
    }
    addProject(project) {
        this.projects.push(project);
    }
    removeProject(id) {
        this.projects = this.projects.filter(p => p.id !== id);
    }
    addUserToProject(projectId, user) {
        const project = this.projects.find(p => p.id === projectId);
        if (!project)
            return;
        const exists = project.members.some(member => member.id === user.id);
        if (!exists) {
            project.members.push(user);
        }
        else {
            console.log(`User ${user.id} already exists in project ${projectId}`);
        }
    }
    listProjects() {
        return this.projects;
    }
}
exports.ProjectManager = ProjectManager;
