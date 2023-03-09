import React from 'react';
import './index.scss';

const AnimatedLetters = ({ letterClass, strArray, idx}) => { // arg is class apply to char, 2nd array of characters, last is index, starting point, set delay 
    return( // span is inline
     // map thru array of letters received.
        <span>
            {
                strArray.map((char, i) =>(
                    <span key = {char +i } className={`${letterClass} _${i + idx}`}>
                    {char}
                        </span>
                ))
            }
        </span>
    )
};

export default AnimatedLetters