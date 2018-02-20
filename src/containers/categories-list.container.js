import { connect } from 'react-redux';
import ListCategories from '../components/categories-list.component';

const mapStateToProps = (state) => ({
    categories: state.categories,
});

export default connect(mapStateToProps)(ListCategories);
