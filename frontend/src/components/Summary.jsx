import React from 'react';
import {Link} from 'react-router-dom';

function Summary() {
    return(
        <>
            <div className="summary container">
                <ul className="summary__list d-flex row justify-content-center">
                    <Link to="/projects">
                        <li className="summary__list--projects w-75">Projets</li>
                    </Link>
                    <Link to="/presentation">
                        <li className="summary__list--presentation w-75">Présentation</li>
                    </Link>    
                    <Link to="/contact">
                        <li className="summary__list--contact w-75">Contact</li>
                    </Link>
                    <Link to="/goldenbook">
                        <li className="summary__list--goldenbook w-75">Livre d'or</li>
                    </Link>
                </ul>
            </div>
        </>
    )
    
}

export default Summary;