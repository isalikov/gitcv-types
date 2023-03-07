export type User = {
    uuid: string;
    name: string;
};

export type CreateUser = Omit<User, 'uuid'>;
