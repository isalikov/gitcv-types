import { Employer } from './employer';

export type History = {
    employer: Employer;
    from: string;
    title: string;
    to: string | null;
};
