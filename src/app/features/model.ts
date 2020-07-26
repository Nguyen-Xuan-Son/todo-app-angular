export interface ITask {
    id?: number;
    isDone?: boolean;
    title: string;
    description: string;
    dueDate: string | number;
    dueDateTimestamp?: number;
    piority: 'normal' | 'low' | 'hight';
}
