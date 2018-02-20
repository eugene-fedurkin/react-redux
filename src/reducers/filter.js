import { SAVE_FILTER_TITLE, TOGGLE_FILTER } from '../constants/constants';

const initialState = {
    title: '',
    active: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_FILTER_TITLE:
            return { 
                ...state,
                title: action.title,
            }
        case TOGGLE_FILTER:
        return { 
            ...state,
            active: !state.active,
        }
        default:
            return state;
    }
}