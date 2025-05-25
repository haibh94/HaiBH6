import { User } from './user';
import { Role } from './enums';

export function isAdmin(user: User): user is User & { role: Role.ADMIN } {
    return user.role === Role.ADMIN;
}