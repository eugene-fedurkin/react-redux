import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ListTasks from '../components/tasks-list.component';

const mapStateToProps = (state) => ({
    categories: state.categories,
    tasks: state.tasks,
    filter: state.filter
});

const mapDispatchToProps = (dispatch) => ({
    openEditTaskModal: () => {
        dispatch({ type: 'OPEN_EDIT_TASK' });
    },
    updateProgressbar: (categoryId, categories, tasks) => {
        dispatch({ type: 'UPDATE_PROGRESS', categoryId, categories, tasks });
    },
    saveTaskIdToEdit: (taskId) => {
        dispatch({ type: 'SAVE_TASK_ID_TO_EDIT', taskId });
    },
    saveCheckboxToEdit: (isDone) => {
        dispatch({ type: 'SAVE_CHECKBOX_TO_EDIT', isDone });
    },
    saveCategoryId: (categoryId) => {
        dispatch({ type: 'SAVE_CATEGORY_ID', categoryId });
    },
    saveFilterTitle: (title) => {
        dispatch({ type: 'SAVE_FILTER_TITLE', title });
    },
    toggleCheckboxTask: (taskId) => {
        dispatch({ type: 'TOGGLE_CHECKBOX_EDIT_TASK', taskId });
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListTasks));
