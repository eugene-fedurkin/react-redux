import { connect } from 'react-redux';
import Progressbar from '../components/progressbar.component';

const mapStateToProps = (state) => ({
    percent: state.progressbar
})

export default connect(mapStateToProps)(Progressbar);
