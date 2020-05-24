import { Moment } from 'moment';

export enum RoutineType {
    Weekly,
    Daily,
    Onetime,
}

export interface Routine {
    routine: RoutineItem[];
    routineType: RoutineType;
    startTime: string;
}

export interface RoutineItem {
    title: string;
}

export interface Goal {
    title: string;
    description?: string;
    deadline: Moment; // in UTF
    color?: string; // hex color
    finished: boolean;
}
