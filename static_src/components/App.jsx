import React from 'react';
import '../style.css';

export default class App extends React.Component {
    render() {
        return (<div className={'div'}><h1 className={'h1'}>{this.props.param}</h1></div>)
    }
}