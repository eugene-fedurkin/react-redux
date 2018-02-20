import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';

export default class Modal extends Component {
    constructor() {
        super();
        this.constants = { // TODO:move string to a separate file
            addCategoryIsClicked: {
                title: 'New category',
                hintText: 'For example: Category',
                floatingLabelText: 'Title',
                closeBtn: 'Cancel',
                addBtn: 'Add',
                onClick: this.addCategory,
                textField: true,
            },
            addTaskIsClicked: {
                title: 'New task',
                hintText: 'For example: Task',
                floatingLabelText: 'Title',
                closeBtn: 'Cancel',
                addBtn: 'Add',
                onClick: this.addTask,
                textField: true,
            },
            editCategory: {
                title: 'Rename category',
                hintText: 'For example: Category',
                floatingLabelText: 'Title',
                closeBtn: 'Cancel',
                addBtn: 'Rename',
                onClick: this.editCategory,
                textField: true,
            },
            deleteCategory: {
                title: 'Delete category',
                hintText: '',
                floatingLabelText: '',
                closeBtn: 'No',
                addBtn: 'Yes',
                onClick: this.deleteCategory,
                textField: false,
            },
            addNestedCategory: {
                title: 'New nested category',
                hintText: 'For example: Nested category',
                floatingLabelText: 'Title',
                closeBtn: 'Cancel',
                addBtn: 'Add',
                onClick: this.addNestedCategory,
                textField: true,
            }
        };
        this.title = null;
        this.activeConstants = null;
    }

    closeModal = () => {
        this.props.closeAllBtn();
        this.props.showValid();
        this.props.toggleModal();
    }

    addTask = () => {
        if (!this.textField.input.value) {
            this.props.showNotValid();
            return;
        }
        this.props.showValid();

        this.props.addTask(this.textField.input.value, this.props.categoryId);
        console.log(this.props.tasks)
        this.props.updateProgressbar(this.props.categoryId, this.props.categories.present, this.props.tasks);
        this.closeModal();
    }

    addCategory = () => {
        if (!this.textField.input.value) {
            this.props.showNotValid();
            return;
        }
        this.props.showValid();

        this.props.addCategory(this.textField.input.value);
        this.closeModal();
    }

    addNestedCategory = () => {
        if (!this.textField.input.value) {
            this.props.showNotValid();
            return;
        }
        this.props.showValid();

        const title = this.textField.input.value;
        this.props.addNestedCategory(title, this.props.categoryId);
        this.props.openCollapseCategory(this.props.categoryId);
        this.closeModal();
    }

    editCategory = () => {
        if (!this.textField.input.value) {
            this.props.showNotValid();
            return;
        }
        this.props.showValid();

        this.props.editCategory(this.textField.input.value, this.props.categoryId);
        this.closeModal();
    }

    deleteCategory = () => {
        this.props.history.push('');
        this.props.deleteCategory(this.props.categoryId);
        this.closeModal();
    }

    defineClick = () => {
        for (let button in this.props.btnClick) {
            if (this.props.btnClick[button]) {
                this.activeConstants = this.constants[button];
                return;
            }
        }
    }

    render() {
        this.defineClick();
        if (!this.activeConstants) {
            return '';
        }
        const actions = [
            <FlatButton
                label={`${this.activeConstants.closeBtn}`}
                primary={true}
                keyboardFocused={true}
                onClick={this.closeModal}
            />,
            <FlatButton
                label={`${this.activeConstants.addBtn}`}
                primary={true}
                onClick={this.activeConstants.onClick}
            />,
        ];
        return(
            <Dialog
                title={this.activeConstants.title
                    || this.props.modalCategory.titleToDelete}
                actions={actions}
                modal={false}
                open={this.props.isOpenModal}
                onRequestClose={this.closeModal}
            >
                {
                    this.activeConstants.textField
                        ? <TextField
                            ref={(input) => { this.textField = input }}
                            hintText={this.activeConstants.hintText}
                            floatingLabelText={this.activeConstants.floatingLabelText}
                            errorText={!this.props.modalCategory.isValid
                                ? 'This field is required'
                                : ''}
                            />
                        : `Are you sure you want to remove ${this.props.modalCategory.titleToDelete}?`
                }
            </Dialog>
        )
    }
}