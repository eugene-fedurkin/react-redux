import { connect } from 'react-redux';
import EditTaskWindow from '../components/edit-task-window.component';

const mapStateToProps = (state) => ({
    editTask: state.editTask,
    tasks: state.tasks,
    filter: state.filter,
})

const mapDispatchToProps = (dispatch) => ({
    updateTaskTitle: (title, taskId) => {
        dispatch({ type: 'UPDATE_TASK_TITLE', title, taskId });
    },
    updateTaskDescription: (description, taskId) => {
        dispatch({ type: 'UPDATE_TASK_DESCRIPTION', description, taskId });
    },
    updateTaskCheckbox: (isDone, taskId) => {
        dispatch({ type: 'UPDATE_TACK_CHECKBOX', isDone, taskId });
    },
    toggleCheckbox: () => {
        dispatch({ type: 'CHANGE_CHECKBOX_TO_EDIT_TASK' });
    },
    showNotValid: () => {
        dispatch({ type: 'SHOW_NOT_VALID_NOTIFICATION_EDIT_TASK' });
    },
    showValid: () => {
        dispatch({ type: 'SHOW_VALID_NOTIFICATION_EDIT_TASK' });
    },
    moveTask: (categoryId, taskId) => {
        dispatch({ type: 'MOVE_TASK', categoryId, taskId });
        dispatch({ type: 'OPEN_NOTIFICATION' });
        dispatch({ type: 'DELETE_CATEGORY_ID_TO_MOVE_TASK' });
    },
    saveFilterTitle: (title) => {
        dispatch({ type: 'SAVE_FILTER_TITLE', title });
    },
    saveTaskIdToEdit: (taskId) => {
        dispatch({ type: 'SAVE_TASK_ID_TO_EDIT', taskId })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditTaskWindow);
