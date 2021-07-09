import {FRAME_MOTION, MOBX} from "./pathNames";
import FramerMotion from "../components/FramerMotion";
import React from "react";
import Mobx from "../components/Mobx";


// name:
// pathName:
// component:
// description:
// librarySource:

export const objPath = [
    {
        name: 'Frame Motion',
        pathName: FRAME_MOTION,
        component: <FramerMotion/>,
        description: 'Данная библиотека служит для анимаций',
        librarySource: 'https://www.framer.com/api/motion/'
    },
    {
        name: 'Mobx',
        pathName: MOBX,
        component: <Mobx/>,
        description: 'Библиотека управления стейтом ',
        librarySource: 'https://mobx.js.org/README.html'
    }

]