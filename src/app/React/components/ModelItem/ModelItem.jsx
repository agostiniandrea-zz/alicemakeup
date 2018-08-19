import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Translate from 'react-translate-component';
import Button from 'Components/Button/Button';
import './ModelItem.scss';

class ModelItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="model-item col-xs-12">
                <div>
                    <h2>{this.props.description}</h2>
                </div>
                <div>
                </div>
                <div>
                    <Button onClick={() => this.props.configureFunc(this.props.id)}>
                        <Translate
                            content="modelItem.configure"
                        />
                    </Button>
                </div>
            </div>
        );
    }
}

ModelItem.propTypes = {
    configureFunc: PropTypes.func,
    description: PropTypes.string,
    id: PropTypes.string,
    features: PropTypes.array
};

export default ModelItem;