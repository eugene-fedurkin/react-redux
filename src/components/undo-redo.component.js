import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class UndoRedo extends Component {

    render() {
        return(
            <div className='undoBtn'>
                <RaisedButton
                    icon={<i className='material-icons'>undo</i>}
                    label='Undo'
                    primary={true}
                    onClick={this.props.onUndo}
                    disabled={!this.props.canUndo}
                />
                <RaisedButton
                    label='Redo'
                    labelPosition="before"
                    icon={<i className='material-icons'>redo</i>}
                    primary={true}
                    onClick={this.props.onRedo}
                    disabled={!this.props.canRedo}
                />
            </div>
        )
    }
}
