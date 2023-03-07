import { Language } from './language';
import { Project } from './project';
import { History } from './history';
import { Education } from './education';

export type CV = {
    contacts: Array<Record<string, string>>;
    education: Array<Education>;
    github: string;
    history: Array<History>;
    languages: Array<Language>;
    location: string;
    name: string;
    photo: string;
    profile: string;
    projects: Array<Project>;
    skills: string;
    tag: string;
    title: string;
    user: string;
    uuid: string;
    visible: boolean;
};
