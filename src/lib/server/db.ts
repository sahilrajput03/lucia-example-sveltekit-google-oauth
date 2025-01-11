export interface UserType {
    id: number;
    email: string;
    googleId: string;
    name: string;
    picture: string;
}
type dbType = {
    userDb: UserType[],
    sessionDb: SessionType[]
}

export const db: dbType = {
    userDb: [],
    sessionDb: [],
}

export type SessionType = {
    id: string
    user_id: number
    expires_at: number
}