export interface Task {
    id: string
    title: string,
    completed: boolean,
    owner_id: string
}

export interface User {
    id: string,
    name: string,
    email: string,
    password: string
}