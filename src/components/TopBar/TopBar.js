import React from 'react';
import { AiTwotoneSetting } from 'react-icons/ai';
import classes from '../../styles/components/TopBar/TopBar.module.scss';

const TopBar = () => {
    return (
        <header className={classes.container}>
            <div className={classes.settings}>
                <span
                    style={{
                        backgroundColor: '#ab83f7',
                        padding: '0.3rem',
                        display: 'flex',
                        alignItems: 'center',
                        borderRadius: '1rem',
                    }}
                >
                    <AiTwotoneSetting className={classes.icon} />
                </span>
            </div>
            <div className={classes.user}>
                <span className={classes.avatar}>EL</span>
                <span className={classes.username}>Emma Lee</span>
            </div>
        </header>
    );
};

export default TopBar;
