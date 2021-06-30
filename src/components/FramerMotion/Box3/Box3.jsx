import React, {useState} from 'react';
import {motion} from 'framer-motion'

const Box3 = () => {

    const BoxVariants = {
        hidden: {
            x: -200,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                delay: 0.5,
                when: 'beforeChildren',
                staggerChildren: 0.3,
                stiffness: 200,
                damping: 19,
            }
        }
    }

    const ListVariants = {
        hidden: {
            x: -10,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
        }
    }


    return (
        <div className="box-container">
            <motion.div className={'box'}
                        variants={BoxVariants}
                        animate={'visible'}
                        initial={'hidden'}
            >
                {[1, 2, 3].map(box => {
                    return <motion.li
                        variants={ListVariants}
                        className={'boxItem'}>

                    </motion.li>
                })}
            </motion.div>
        </div>
    );
};

export default Box3;