import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Modal from '../components/dialog.component';

const mapStateToProps = (state) => ({
    btnClick: state.btnClick,
    isOpenModal: state.modal,
    categoryId: state.categoryId,
    modalCategory: state.modalCategory,
    categories: state.categories,
    tasks: state.tasks,
})

const mapDispatchToProps = (dispatch) => ({
    deleteCategory: (categoryId) => {
        dispatch({ type: 'DELETE_CATEGORY', categoryId });
        dispatch({ type: 'DELETE_CATEGORY_ID' });
    },
    editCategory: (title, categoryId) => {
        dispatch({ type: 'EDIT_CATEGORY', title, categoryId });
    },
    closeAllBtn: () => {
        dispatch({ type: 'CLOSE_ALL_BTN' });
    },
    toggleModal: () => {
        dispatch({ type: 'TOGGLE_MODAL' });
    },
    addCategory: (title) => {
        dispatch({ type: 'ADD_CATEGORY', title });
    },
    addTask: (title, categoryId) => {
        dispatch({ type: 'ADD_TASK', title, categoryId });
    },
    addNestedCategory: (title, parentCategoryId) => {
        dispatch({ type: 'ADD_NESTED_CATEGORY', title, parentCategoryId });
    },
    openCollapseCategory: (categoryId) => {
        dispatch({ type: 'OPEN_COLLAPSE_CATEGORY', categoryId });
    },
    showNotValid: () => {
        dispatch({ type: 'SHOW_NOT_VALID_NOTIFICATION' });
    },
    showValid: () => {
        dispatch({ type: 'SHOW_VALID_NOTIFICATION' });
    },
    updateProgressbar: (categoryId, categories, tasks) => {
        dispatch({ type: 'UPDATE_PROGRESS', categoryId, categories, tasks });
    },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));
