import { SAVE_CATEGORY_ID, DELETE_CATEGORY_ID } from '../constants/constants';

const initialState = null;

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_CATEGORY_ID:
            return action.categoryId;
        default:
            return state;
        case DELETE_CATEGORY_ID:
            return null;
    }
}