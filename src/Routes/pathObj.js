import {FRAME_MOTION, MOBX, TABLES_MATERIALUI} from "./pathNames";
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
        name: 'Framer Motion',
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
    },
    {
        name: 'Material tables',
        pathName: TABLES_MATERIALUI,
        component: <FramerMotion/>,
        description: 'Данная библиотека служит для анимаций',
        librarySource: 'https://www.framer.com/api/motion/'
    },

]