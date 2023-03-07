import { User } from '../models';

export type UserRequestBody = Omit<Partial<User>, 'uuid' | 'githubID'>;
