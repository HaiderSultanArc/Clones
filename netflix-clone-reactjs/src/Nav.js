import React, { useEffect, useState } from 'react';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(
        () => {
            window.addEventListener('scroll',   // Listen to the Scroll
                () => {
                    if (window.scrollY > 100) {     // if scroll Y-axis more than 100
                        handleShow(true);
                    }
                    else {
                        handleShow(false);
                    }
                }
            );

            return () => {
                window.removeEventListener("scroll");   // Remove Listener
            };

        }, []
    );

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
            <img className="nav__avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Netlix Logo" />
        </div>
    )
}

export default Nav
