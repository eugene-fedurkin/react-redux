import { combineReducers } from 'redux';
import btnClick from './btn-click.js';
import categories from './categories';
import categoryId from './categoryId';
import tasks from './tasks';
import filter from './filter';
import progressbar from './progressbar';
import modal from './modal';
import editTask from './edit-task';
import title from './title-to-delete.js';

export default combineReducers({
    btnClick,
    modal,
    categories,
    tasks,
    categoryId,
    filter,
    progressbar,
    modalCategory: title,
    editTask: editTask,
});