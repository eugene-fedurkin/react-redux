import { ADD_TASK,
    TOGGLE_CHECKBOX_EDIT_TASK,
    UPDATE_TASK_TITLE,
    UPDATE_TASK_DESCRIPTION,
    UPDATE_TACK_CHECKBOX,
    MOVE_TASK,
} from '../constants/constants';

const initialState = [
    {
        title: 'TASK 1',
        taskId: 1,
        categoryId: 1,
        isDone: true,
        description: '',
        
     },
     {
        title: 'TASK 2',
        taskId: 2,
        categoryId: 1,
        isDone: false,
        description: '',
        
     },
     {
        title: 'TASK 3',
        taskId: 3,
        categoryId: 1,
        isDone: true,
        description: '',
        
     },
     {
        title: 'TASK 4',
        taskId: 4,
        categoryId: 2,
        isDone: false,
        description: '',
        
     },
     {
        title: 'TASK 5',
        taskId: 5,
        categoryId: 2,
        isDone: true,
        description: '',
        
     },
     {
        title: 'TASK 6',
        taskId: 6,
        categoryId: 2,
        isDone: true,
        description: '',
        
     },
     {
        title: 'TASK 7',
        taskId: 7,
        categoryId: 3,
        isDone: false,
        description: '',
        
     },
     {
        title: 'TASK 8',
        taskId: 8,
        categoryId: 3,
        isDone: true,
        description: '',
        
     },
     {
        title: 'TASK 9',
        taskId: 9,
        categoryId: 6,
        isDone: false,
        description: '',
        
     },
     {
        title: 'TASK 10',
        taskId: 10,
        categoryId: 6,
        isDone: true,
        description: '',
        
     },
     {
        title: 'TASK 11',
        taskId: -1,
        categoryId: 4,
        isDone: true,
        description: '',
        
     },
     {
        title: 'TASK 12',
        taskId: -2,
        categoryId: 5,
        isDone: false,
        description: '',
        
     },
     {
        title: 'TASK 13',
        taskId: -3,
        categoryId: 3,
        isDone: true,
        description: '',
        
     },
     {
        title: 'TASK 14',
        taskId: -4,
        categoryId: 5,
        isDone: false,
        description: '',
        
     },
     {
        title: 'TASK 15',
        taskId: -5,
        categoryId: 2,
        isDone: true,
        description: '',
        
     }
];

let newState = null;
let task = null;
let id = 10;


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return [
                {
                    title: action.title,
                    taskId: ++id,
                    categoryId: action.categoryId,
                    isDone: false,
                    description: '',
                },
                ...state,
            ];
        case TOGGLE_CHECKBOX_EDIT_TASK:
            newState = [...state];
            task = newState.find(task =>
                task.taskId === action.taskId);
            task.isDone = !task.isDone;
            return newState;
        case UPDATE_TASK_TITLE:
            newState = [...state];
            task = newState.find(task =>
                task.taskId === action.taskId);
            task.title = action.title;
            return newState;
        case UPDATE_TASK_DESCRIPTION:
            newState = [...state];
            task = newState.find(task =>
                task.taskId === action.taskId);
            task.description = action.description;
            return newState;
        case UPDATE_TACK_CHECKBOX:
            newState = [...state];
            task = newState.find(task =>
                task.taskId === action.taskId);
            task.isDone = action.isDone;
            return newState;
        case MOVE_TASK:
            newState = [...state];
            task = newState.find(task =>
                task.taskId === action.taskId);
            task.categoryId = action.categoryId;
            return newState;
        default:
            return state;
    }
}
