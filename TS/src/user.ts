import { Role, Status } from './enums';

export interface User {
    readonly id: number;
    name: string;
    email: string;
    role: Role;
    status: Status;
}

export function describeUser(user: User): string {
    return `User [${user.id}] ${user.name} (${user.email}) - Role: ${user.role}, Status: ${user.status}`;
}