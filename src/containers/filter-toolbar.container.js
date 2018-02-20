import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import FilterToolbar from '../components/filter-toolbar.component';

const mapStateToProps = (state) => ({
    filter: state.filter
})

const mapDispatchToProps = (dispatch) => ({
    saveFilter: (title) => {
        dispatch({ type: 'SAVE_FILTER_TITLE', title });
    },
    toggleFilter: () => {
        dispatch({ type: 'TOGGLE_FILTER'});
    }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilterToolbar));

