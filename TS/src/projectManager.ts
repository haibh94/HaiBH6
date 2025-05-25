import { Project } from './project';
import { User } from './user';

export class ProjectManager {
    private projects: Project[] = [];

    addProject(project: Project): void {
        this.projects.push(project);
    }

    removeProject(id: number): void {
        this.projects = this.projects.filter(p => p.id !== id);
    }

    addUserToProject(projectId: number, user: User): void {
        const project = this.projects.find(p => p.id === projectId);
        if (!project) return;

        const exists = project.members.some(member => member.id === user.id);
        if (!exists) {
            project.members.push(user);
        } else {
            console.log(`User ${user.id} already exists in project ${projectId}`);
        }
    }

    listProjects(): Project[] {
        return this.projects;
    }
}