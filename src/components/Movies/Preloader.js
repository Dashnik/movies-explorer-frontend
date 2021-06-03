import React from 'react'
import './Preloader.css'
import { CurrentPreloaderContext } from "../contexts/CurrentContext";

const Preloader = () => {

    const conditionOfPreloader = React.useContext(CurrentPreloaderContext);
 
    return (
        <div className={`preloader ${conditionOfPreloader ? 'preloader_opened' : ''}`}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
