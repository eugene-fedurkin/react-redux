import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';

export default class ListTasks extends Component {

    componentWillMount() {
        this.categoryId = Number(this.props.match.params.categoryId);
        this.props.saveCategoryId(this.categoryId);
        if (!this.props.filter.title && this.props.match.params.filter) {
            this.props.saveFilterTitle(this.props.match.params.filter);
        }

        this.updateProgressbar();
    }

    getTasks = () => {
        this.categoryId = Number(this.props.match.params.categoryId);
        const filter = this.props.filter;
        const regex = new RegExp(filter.title);

        this.tasks = this.props.tasks.filter((task) => {
            return !filter.active
                ? !task.isDone
                    && (task.categoryId === this.categoryId)
                    && regex.test(task.title)
                : (task.categoryId === this.categoryId) && regex.test(task.title);
        });
    }

    updateProgressbar = () => {
        this.props.updateProgressbar(this.categoryId, this.props.categories.present, this.props.tasks);
    }

    openEditTaskModal = (taskId, isDone) => {
        this.props.saveTaskIdToEdit(taskId);
        this.props.saveCheckboxToEdit(isDone);
        this.props.openEditTaskModal();
    }

    render() {
        this.getTasks();
        return(
            <List className='taskList'>
                <Scrollbars style={{ height: '80vh' }} autoHide>
                    {!this.tasks.length
                        ?   <div className='notActiveTasks'>
                                {this.props.filter.title
                                    ? `Not active tasks in the category with '${this.props.filter.title}' filter`
                                    : 'Not active tasks in the category'
                                }
                            </div>
                        :   this.tasks.map((task, index) => {
                                return <ListItem
                                    key={index}
                                    primaryText={task.title}
                                    className='task'
                                    leftCheckbox={
                                        <Checkbox
                                            checked={this.tasks[index].isDone}
                                            onClick={() => this.props.toggleCheckboxTask(task.taskId)} />
                                    }
                                    rightIcon={
                                        <Link to={`/category/${task.categoryId}/task/${task.taskId}/`}>
                                            <i onClick={
                                                () => this.openEditTaskModal(task.taskId, task.isDone)
                                            } className='material-icons'>edit</i>
                                        </Link>
                                    }
                                />
                            })}
                </Scrollbars>
            </List>
        )
    }
}