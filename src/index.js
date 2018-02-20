import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import reducer from './reducers';
import App from './containers/app.container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Categories from './containers/categories-list.container';
import Tasks from './containers/tasks-list.container';
import EditTaskWindow from './containers/edit-task-window.container';


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router>
                <div className='container'>
                    <Route component={App} />
                    <Route path='/' component={Categories} />
                    <Route path='/' render={() => (
                        <div className='taskRoute'>
                            <Route path='/category/:categoryId/:filter?' component={Tasks} />
                            <Route path='/category/:categoryId/task/:taskId/:filter?' render={() => (
                                <Route component={EditTaskWindow} />
                            )} />
                        </div>
                    )} />
                </div>
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
