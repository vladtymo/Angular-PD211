export const USERS: IUser[] = [
    { id: 1001, name: "Nazar", email: "tymo@ukr.net", role: "Admin" },
    { id: 1002, name: "Olga", email: "olga@ukr.net", role: "User" },
    { id: 1003, name: "Vitalii", email: "vit@ukr.net", role: "Manager" },
]

export interface IUser {
    id: number;
    name: string;
    email?: string;
    role: string;
    birthdate?: Date;
}