import { SAVE_TASK_ID_TO_EDIT,
    SAVE_CHECKBOX_TO_EDIT,
    CHANGE_CHECKBOX_TO_EDIT_TASK,
    OPEN_NOTIFICATION,
    CLOSE_NOTIFICATION,
    SHOW_VALID_NOTIFICATION_EDIT_TASK,
    SHOW_NOT_VALID_NOTIFICATION_EDIT_TASK,
    SAVE_CATEGORY_ID_TO_MOVE_TASK,
    DELETE_CATEGORY_ID_TO_MOVE_TASK,
} from '../constants/constants';

const initialState = {
    taskId: null,
    isDone: false,
    isMoved: false,
    isValid: true,
    categoryIdToMoveTask: null,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_TASK_ID_TO_EDIT:
            return {
                ...state,
                taskId: action.taskId,
            };
        case SAVE_CHECKBOX_TO_EDIT:
            return {
                ...state,
                isDone: action.isDone,
            };
        case CHANGE_CHECKBOX_TO_EDIT_TASK:
            return {
                ...state,
                isDone: !state.isDone,
            };
        case OPEN_NOTIFICATION:
            return {
                ...state,
                isMoved: true,
            }
        case CLOSE_NOTIFICATION:
            return {
                ...state,
                isMoved: false,
            }
        case SHOW_VALID_NOTIFICATION_EDIT_TASK:
            return {
                ...state,
                isValid: true,
            }
        case SHOW_NOT_VALID_NOTIFICATION_EDIT_TASK:
            return {
                ...state,
                isValid: false,
            }
        case SAVE_CATEGORY_ID_TO_MOVE_TASK:
            return {
                ...state,
                categoryIdToMoveTask: action.categoryId,
            }
        case DELETE_CATEGORY_ID_TO_MOVE_TASK:
            return {
                ...state,
                categoryIdToMoveTask: null,
            }
        default:
            return state;
    }
}