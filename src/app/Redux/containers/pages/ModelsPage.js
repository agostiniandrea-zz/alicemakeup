import { connect } from 'react-redux';
import ModelsPage from 'PagesComponents/ModelsPage';

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        models: state.models,
        user: state.user
    };
};

export default connect(
    mapStateToProps,
    null
)(ModelsPage);