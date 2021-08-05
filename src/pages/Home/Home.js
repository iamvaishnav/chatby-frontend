import React from 'react';
import TopBar from '../../components/TopBar/TopBar';
import OptionsBar from '../../components/OptionsBar/OptionsBar';
import ChatWindow from '../../components/ChatWindow/ChatWindow';
import Discover from '../../components/Discover/Discover';
import classes from '../../styles/pages/Home/Home.module.scss';

const Home = (props) => {
    return (
        <section className={classes.wrapper}>
            <TopBar />
            <OptionsBar />
            {/* <ChatWindow /> */}
            <Discover />
        </section>
    );
};

export default Home;
