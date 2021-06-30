import React, {useState} from 'react';
import {motion} from 'framer-motion'

const Box1 = () => {

    const [isAnimate, setIsAnimate] = useState(false)

    return (
        <div className="box-container">
            <motion.div className={'box'}
                        onClick={() => {setIsAnimate(!isAnimate)}}

                        animate={{
                            x: isAnimate?'40vw': '0',
                            opacity: isAnimate? 1: 0.5,
                            rotate: isAnimate? 360: 0
                        }}

                        initial={{
                            opacity: 0.1,
                        }}

                        transition={{
                            type: 'keyframes',
                            stiffness: 60,
                        }
                        }
            >

            </motion.div>
        </div>
    );
};

export default Box1;