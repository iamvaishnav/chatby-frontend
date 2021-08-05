import React from 'react';
import ChatCards from '../ChatCards/ChatCards';
import classes from '../../styles/components/ChatWindow/ChatWindow.module.scss';

const ChatWindow = (props) => {
    return (
        <div className={classes.container}>
            <header className={classes.title}>Chats</header>
            <ChatCards avatar='T' name='Tom' message='Hey, how are you?' />
            <ChatCards avatar='M' name='Mark' message='I am good.' />
            <ChatCards avatar='J' name='Joan' message='I am good.' />
        </div>
    );
};

export default ChatWindow;
