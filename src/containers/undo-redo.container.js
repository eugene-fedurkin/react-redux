import { connect } from 'react-redux';
import UndoRedo from '../components/undo-redo.component';

const mapStateToProps = (state) => ({
    canUndo: state.categories.past.length > 0,
    canRedo: state.categories.future.length > 0,
});

const mapDispatchToProps = (dispatch) => ({
    onUndo: () => dispatch({ type: 'UNDO' }),
    onRedo: () => dispatch({ type: 'REDO' })
});

export default connect(mapStateToProps, mapDispatchToProps)(UndoRedo);
