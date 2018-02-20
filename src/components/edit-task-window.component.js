import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Categories from '../containers/categories-list.container';

const styles = {
    height: '90%',
    width: '90%',
    padding: 16,
  };

export default class EditTaskWindow extends Component {
    constructor() {
        super();
        this.task = null;
    }

    componentWillMount() {
        const filter = this.props.match.params.filter || this.props.filter.title;
        if (filter) {
            this.props.history.push(`${filter}`);
            this.props.saveFilterTitle(filter);
        }
        if (!this.props.editTask.taskId) {
            const taskId = Number(this.props.match.params.taskId);
            this.props.saveTaskIdToEdit(taskId);
        }
    }

    getTask = () => {
        const taskId = Number(this.props.match.params.taskId);
        this.task = this.props.tasks.find(task =>
            task.taskId === taskId);
    }

    saveChanges = () => {
        const title = this.textField.input.value;
        if (!title) {
            this.props.showNotValid();
            return;
        }
        this.props.showValid();

        const taskWasMoved = this.props.editTask.categoryIdToMoveTask;
        if (taskWasMoved) {
            const categoryIdToMoveTask = this.props.editTask.categoryIdToMoveTask;
            const taskId = this.props.editTask.taskId;
            this.props.moveTask(categoryIdToMoveTask, taskId);
        }

        this.props.updateTaskTitle(title, this.task.taskId);
        this.props.updateTaskDescription(this.textareaField.value, this.task.taskId);
        this.props.updateTaskCheckbox(this.props.editTask.isDone, this.task.taskId);
        this.closeEditTaskModal();
    }

    closeEditTaskModal = () => {
        const categoryId = this.props.match.params.categoryId;
        if (this.props.match.params.filter || this.props.filter.title) {
            this.props.history
                .replace(`/category/${categoryId}/${this.props.match.params.filter || this.props.filter.title}`);
            return;
        }

        this.props.history.replace(`/category/${categoryId}/`);
    }

    render() {
        this.getTask();
        return(
            <div className='outsideEditTask'>
                <Paper zDepth={5} style={styles}>
                    <h3>{this.task.title}</h3>
                    <section className='containerEditTask'>
                        <div className='buttonsInTaskModal'>
                            <FlatButton
                                label='Save changes'
                                primary={true}
                                keyboardFocused={true}
                                onClick={this.saveChanges}
                            />
                            <FlatButton
                                label='Cancel'
                                primary={true}
                                keyboardFocused={true}
                                onClick={this.closeEditTaskModal}
                            />
                        </div>
                        <TextField
                            ref={(input) => { this.textField = input }}
                            defaultValue={this.task.title}
                            hintText='Enter a task name'
                            floatingLabelText='Task name'
                            className='inputInTaskModal'
                            errorText={!this.props.editTask.isValid
                                ? 'The field needs a title'
                                : ''}
                        />
                        <Checkbox
                            label='Done'
                            checked={this.props.editTask.isDone}
                            className='checkboxInTaskModal'
                            onCheck={() =>
                                this.props.toggleCheckbox(this.props.editTask.taskId)}
                        />
                        <textarea
                            ref={(input) => { this.textareaField = input }}
                            className='textareaInTaskModal'
                            placeholder='Description'
                            defaultValue={this.task.description}
                        >
                        </textarea>
                        <Categories isEditWindow />
                    </section>
                </Paper>
            </div>
        )
    }
}