import React from 'react';
import TopBar from '../../components/TopBar/TopBar';
import classes from '../../styles/pages/Home/Home.module.scss';

const Home = (props) => {
    return (
        <section className={classes.wrapper}>
            <TopBar />
        </section>
    );
};

export default Home;
