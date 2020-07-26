import { ITask } from '../features/model';
import { TASKS } from '../contstant';
import { convertTime } from '../utils/convertTime';

export const getTasks = () => {
    const tasks = JSON.parse(localStorage.getItem(TASKS)) || [];
    return tasks.sort((taskBefore: ITask, taskAfter: ITask) => {
        const a: any = convertTime(taskBefore.dueDate, 'timestamp');
        const b: any = convertTime(taskAfter.dueDate, 'timestamp');
        return (a - b);
    });
};

export const setTasks = (tasks: ITask[]) => {
    return localStorage.setItem(TASKS, JSON.stringify(tasks));
};

export const saveTask = (task: ITask) => {
    const tasksClone: ITask[] = getTasks();
    tasksClone.push(task);
    setTasks(tasksClone);
};

export const removeTaskById = (id: number) => {
    const tasksClone: ITask[] = getTasks();
    const tasksRemoved: ITask[] = tasksClone.filter(task => task.id !== id);
    setTasks(tasksRemoved);
};

export const getTaskById = (id: number) => {
    const tasksClone: ITask[] = getTasks();
    const taskGeted: ITask = tasksClone.filter((task: ITask) => task.id === id)[0];
    return taskGeted;
};

export const updateTaskById = (task: ITask) => {
    const tasksClone: ITask[] = getTasks();
    tasksClone.forEach((taskClone: ITask, index: number) => {
        if (taskClone.id === task.id) {
            tasksClone[index] = task;
        }
    });
    setTasks(tasksClone);
};
