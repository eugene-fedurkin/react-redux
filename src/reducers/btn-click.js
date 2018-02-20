import { TOGGLE_CATEGORY_MODAL,
    CLICK_EDIT_CATEGORY,
    CLICK_DELETE_CATEGORY,
    TOGGLE_TASK_MODAL,
    CLICK_ADD_NESTED_CATEGORY,
    CLOSE_ALL_BTN } from '../constants/constants';

const initialState = {
    addCategoryIsClicked: false,
    addTaskIsClicked: false,
    editCategory: false,
    deleteCategory: false,
    addNestedCategory: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_CATEGORY_MODAL:
            return {...state, addCategoryIsClicked: !state.addCategoryIsClicked};
        case CLICK_EDIT_CATEGORY:
            return {...state, editCategory: !state.editCategory};
        case CLICK_DELETE_CATEGORY:
            return {...state, deleteCategory: !state.deleteCategory};
        case TOGGLE_TASK_MODAL:
            return {...state, addTaskIsClicked: !state.addTaskIsClicked};
        case CLICK_ADD_NESTED_CATEGORY:
            return {...state, addNestedCategory: !state.addNestedCategory}
        case CLOSE_ALL_BTN:
            return {
                addCategoryIsClicked: false,
                addTaskIsClicked: false,
                editCategory: false,
                deleteCategory: false,
                addNestedCategory: false,
            }
        default:
            return state;
    }
}