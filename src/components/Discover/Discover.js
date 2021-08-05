import React from 'react';
import UserCards from '../UserCards/UserCards';
import classes from '../../styles/components/ChatWindow/ChatWindow.module.scss';

const Discover = (props) => {
    return (
        <div className={classes.container}>
            <header className={classes.title}>People Nearby</header>
            <UserCards avatar='J' name='Jesse Pinkman' />
            <UserCards avatar='M' name='Mike Z' />
            <UserCards avatar='S' name='Saul Goodman' />
            <UserCards avatar='J' name='John Smith' />
        </div>
    );
};

export default Discover;
