import tasks from './tasks';
import UndoRedo from '../helper/undo-redo';
import { ADD_CATEGORY,
    ADD_NESTED_CATEGORY,
    DELETE_CATEGORY,
    EDIT_CATEGORY,
    TOGGLE_COLLAPSE_CATEGORY,
    OPEN_COLLAPSE_CATEGORY } from '../constants/constants';

const initialState = [
    {
        title: 'Category 1',
        categoryId: 1,
        parentCategoryId: null,
     },
     {
        title: 'Category 2',
        categoryId: 2,
        parentCategoryId: null,
     },
     {
        title: 'Category 3 nested in Cat 1',
        categoryId: 3,
        parentCategoryId: 1,
     },
     {
        title: 'Category 4 nested in Cat 3',
        categoryId: 4,
        parentCategoryId: 3,
     },
     {
        title: 'Category 5 nested in Cat 2',
        categoryId: 5,
        parentCategoryId: 2,
     },
     {
        title: 'Category 6 nested in Cat 2',
        categoryId: 6,
        parentCategoryId: 2,
     },
     {
        title: 'Category 7 nested in Cat 2',
        categoryId: 7,
        parentCategoryId: 2,
     },
     {
        title: 'Category 8 nested in Cat 6',
        categoryId: 8,
        parentCategoryId: 6,
     }
];

let id = 10;
let newState;
let category;
const undoRedo = new UndoRedo();

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATEGORY:
            return [
                {
                   title: action.title,
                   categoryId: id++,
                   parentCategoryId: null,
                },
                ...state,
            ];
        case ADD_NESTED_CATEGORY:
            return [
                {
                   title: action.title,
                   categoryId: id++,
                   parentCategoryId: action.parentCategoryId,
                },
                ...state,
            ];
        case DELETE_CATEGORY:
            newState = [...state];
            let categoryId = action.categoryId;
            let childId;
            let stack = [];
            for (let index = 0; index < newState.length; index++) {
                if (newState[index].categoryId === categoryId) {
                    newState.splice(index, 1);
                }
                if (newState[index] && newState[index].parentCategoryId === categoryId) {
                    stack.push(newState[index].categoryId);
                    newState.splice(index, 1);
                    index--;
                }
                if (index >= newState.length - 1 && stack.length) {
                    index = -1;
                    categoryId = stack.pop();
                }
            }

            return newState;
        case EDIT_CATEGORY:
            newState = [...state];
            category = newState.find(category =>
                category.categoryId === action.categoryId
            );
            category.title = action.title;
            return newState;
        case TOGGLE_COLLAPSE_CATEGORY:
            newState = [...state];
            category = newState.find(category =>
                category.categoryId === action.categoryId
            );
            category.isCollapse = !category.isCollapse;
            return newState;
        case OPEN_COLLAPSE_CATEGORY:
            newState = [...state];
            category = newState.find(category =>
                category.categoryId === action.categoryId
            );
            category.isCollapse = true;
            return newState;
        default:
            return state;
    }
};

export default undoRedo.undoable(reducer);