import React from 'react';
import classes from '../../styles/components/ChatCards/ChatCards.module.scss';

const ChatCards = (props) => {
    return (
        <div className={classes.cards}>
            <span className={classes.avatar}>{props.avatar}</span>
            <div className={classes.user}>
                <span className={classes.name}>{props.name}</span>
                <span className={classes.lastMsg}>{props.message}</span>
            </div>
        </div>
    );
};

export default ChatCards;
