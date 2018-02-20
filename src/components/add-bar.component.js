import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class AddBar extends Component {
    toggleCategoryModal = () => {
        this.props.onCategoryClick();
    }

    toggleTaskModal = () => {
        this.props.onTaskClick();
    }

    render() {
        return(
            <section className='addBar'>
                <RaisedButton label='Add Category' primary={true} onClick={this.toggleCategoryModal} />
                <RaisedButton label='Add Task' disabled={!this.props.categoryId} primary={true} onClick={this.toggleTaskModal} />
                
            </section>
        )
    }
}