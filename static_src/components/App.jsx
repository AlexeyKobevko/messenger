import React from 'react';
import '../styles/style.css';
import MessageField from './MessageField';
import Message from './Message';


export default class App extends React.Component {
    componentDidMount() {
        console.log("It doesn't works!!!");
    }

    render() {
        return <MessageField />
    }
}
