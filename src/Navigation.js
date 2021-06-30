import React from 'react';
import {Switch, Route} from 'react-router-dom'
import FramerMotion from "./components/FramerMotion";

const Navigation = () => {

    const style = {
        container: {
            width: '100%',
        }
    }

    return (
        <div style={style.container}>
            <Switch>
                <Route path="/framer_motion">
                    <FramerMotion/>
                </Route>
            </Switch>
        </div>
    );
};

export default Navigation;