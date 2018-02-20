import React, { Component } from 'react';
import Filterbar from '../containers/filter-toolbar.container';
import AddBar from '../containers/add-bar.container';
import CompleteBar from '../containers/progressbar.container';
import Dialog from '../containers/dialog.container';
import Snackbar from 'material-ui/Snackbar';
import UndoRedo from '../containers/undo-redo.container';

export default class App extends Component {

    render() {
        return(
            <div className='toolsBar'>
                <Filterbar />
                <CompleteBar />
                <AddBar />
                <UndoRedo />
                <Dialog />
                <Snackbar
                    open={this.props.editTask.isMoved}
                    message='Task has been moved'
                    autoHideDuration={2000}
                    onRequestClose={this.props.closeNotification}
                />
            </div>
        )
    }
}