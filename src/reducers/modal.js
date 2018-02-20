import { TOGGLE_MODAL } from '../constants/constants';

const initialState = false;

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_MODAL:
            return !state
        default:
            return state;
    }
}