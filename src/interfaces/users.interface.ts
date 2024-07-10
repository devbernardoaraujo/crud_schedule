export interface User{
    id:    string;
    email: string;
    name:  string;
    createdAt: Date;
    updatedAt: Date;
}

export interface UserCreate{
    email: string;
    name:  string;
}

export interface UserRepository{
    create(data: UserCreate): Promise<User>;// promise para aguardar o retorno
    findByEmail(email: string): Promise <User | null>;
}