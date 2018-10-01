import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'Components/Button';
import './Option.scss';

export default class Option extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="option">
                <title>{this.props.title}</title>
                <Button onClick={this.props.onClick} text={'option.' + (this.props.selected ? 'selected' : 'unselected')} />
            </section>
        );
    }
}

Option.propTypes = {
    onClick: PropTypes.func,
    selected: PropTypes.bool,
    title: PropTypes.string
};