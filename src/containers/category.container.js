import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Category from '../components/category.component';

const mapStateToProps = (state) => ({
    categories: state.categories,
    categoryIdToMoveTask: state.editTask.categoryIdToMoveTask,
    tasks: state.tasks,
    filterTitle: state.filter.title
})

const mapDispatchToProps = (dispatch) => ({
    saveCategoryId: (categoryId) => {
        dispatch({ type: 'SAVE_CATEGORY_ID', categoryId });
    },
    openEditModal: () => {
        dispatch({ type: 'TOGGLE_MODAL' });
        dispatch({ type: 'CLICK_EDIT_CATEGORY' });
    },
    openDeleteModalCategory: (title) => {
        dispatch({ type: 'TOGGLE_MODAL' });
        dispatch({ type: 'CLICK_DELETE_CATEGORY' });
        dispatch({ type: 'SAVE_TITLE_TO_DELETE', title });
    },
    openAddModalNestedCategory: () => {
        dispatch({ type: 'TOGGLE_MODAL' });
        dispatch({ type: 'CLICK_ADD_NESTED_CATEGORY' });
    },
    toggleCollapseCategory: (categoryId) => {
        dispatch({ type: 'TOGGLE_COLLAPSE_CATEGORY', categoryId });
    },
    saveCategoryIdToMoveTask: (categoryId) => {
        dispatch({ type: 'SAVE_CATEGORY_ID_TO_MOVE_TASK', categoryId });
    },
    updateProgressbar: (categoryId, categories, tasks) => {
        dispatch({ type: 'UPDATE_PROGRESS', categoryId, categories, tasks });
    },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Category));
