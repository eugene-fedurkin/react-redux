import { connect } from 'react-redux';
import App from '../components/app.component';

const mapStateToProps = (state) => ({
    editTask: state.editTask,
})

const mapDispatchToProps = (dispatch) => ({
    closeNotification: () => {
        dispatch({ type: 'CLOSE_NOTIFICATION' });
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
