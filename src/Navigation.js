import React from 'react';
import {Switch, Route} from 'react-router-dom'
import FramerMotion from "./components/FramerMotion";
import Description from "./components/Description";
import {objPath} from "./Routes/pathObj";

const Navigation = () => {

    const style = {
        container: {
            width: '100%',
        }
    }

    return (
        <div style={style.container}>
            <Switch>

                {objPath.map(({pathName, component, librarySource, description })=><Route key={pathName} path={pathName} render={()=><>
                    <Description
                        href={librarySource}
                        h1={description}
                    />
                    {component}
                </> }></Route> )}


            </Switch>
        </div>
    );
};

export default Navigation;