import { SAVE_TITLE_TO_DELETE,
    SHOW_NOT_VALID_NOTIFICATION,
    SHOW_VALID_NOTIFICATION,
} from '../constants/constants';

const initialState = {
    titleToDelete: '',
    isValid: true,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_TITLE_TO_DELETE:
            return {
                ...state,
                titleToDelete: action.title,
            };
        case SHOW_NOT_VALID_NOTIFICATION:
            return {
                ...state,
                isValid: false,
            }
        case SHOW_VALID_NOTIFICATION:
            return {
                ...state,
                isValid: true,
            }
        default:
            return state;
    }
}