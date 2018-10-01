import { connect } from 'react-redux';
import _ from 'lodash';
import SectionPage from 'PagesComponents/SectionPage';
import { addOption, removeOption } from 'Modules/sections';

const mapStateToProps = (state) => {
    return {
        current: _.find(state.sections, { title: state.params.page }),
        loading: state.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addOption: (id) => {
            dispatch(addOption(id));
        },
        removeOption: (id) => {
            dispatch(removeOption(id));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SectionPage);