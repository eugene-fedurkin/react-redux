import { connect } from 'react-redux';
import AddBar from '../components/add-bar.component';

const mapStateToProps = (state) => ({
    categoryId: state.categoryId,
})

const mapDispatchToProps = (dispatch) => ({
    onCategoryClick: () => {
        dispatch({ type: 'TOGGLE_CATEGORY_MODAL' });
        dispatch({ type: 'TOGGLE_MODAL' });
    },
    onTaskClick: () => {
        dispatch({ type: 'TOGGLE_TASK_MODAL' });
        dispatch({ type: 'TOGGLE_MODAL' });
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(AddBar);
