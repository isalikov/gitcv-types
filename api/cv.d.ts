import { CV } from '../models';

export type CVRequestBody = Omit<Partial<CV>, 'user' | 'uuid'>;

export type CVTagCheckRequestBody = {
    tag: string;
};
