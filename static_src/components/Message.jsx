import React from 'react';
import PropTypes from 'prop-types';


export default class Message extends React.Component {
    static propTypes = {
        message: PropTypes.string.isRequired,
        sender: PropTypes.string,
    };


    render() {
        return (<div className={ this.props.sender === 'bot' ? 'bot-message' : 'me-message' }>{ this.props.message }</div>)
    }
}