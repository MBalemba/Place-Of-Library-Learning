import React, {useState} from 'react';
import {motion} from 'framer-motion'

const Box2 = () => {


    return (
        <div className="box-container">
            <motion.div className={'box'}
                        drag
                        dragConstraints={{
                            right: 0,
                            left: 0,
                            top: 0,
                            bottom: 0,
                        }
                        }
                        whileHover={{
                            scale: 1.1,
                        }}
                        whileTap={{
                            scale: 0.9,
                        }
                        }
            >

            </motion.div>
        </div>
    );
};

export default Box2;