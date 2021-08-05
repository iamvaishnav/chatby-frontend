import React from 'react';
import classes from '../../styles/components/OptionsBar/OptionsBar.module.scss';

const OptionsBar = () => {
    return (
        <section className={classes.container}>
            <div className={classes.chip}>
                <span className={classes.chip__label}>Chat</span>
            </div>
            <div className={classes.chip}>
                <span className={classes.chip__label}>Discover</span>
            </div>
        </section>
    );
};

export default OptionsBar;
