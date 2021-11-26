import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/images/fitify.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link, NavLink, Button } from 'src/atoms/';
import { useAuth } from 'src/utils/auth';
import { route } from 'src/Routes';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { RightNavigation } from './RightNavigation';

export function MobileNavigation() {
    const { user, signout } = useAuth();
    const history = useHistory();
    const  [open, setOpen] = useState (false);


    return (
        <main className="mobile-navigation">
        <nav className="flex justify-between bb bg-dark">
            <Link to={route.home()} noUnderline className="b flex items-center green">
                <Logo className="mr1 f2 fitify-logo" />
            </Link>
            <div className="flex-grow flex items-center mr4">
                {user ? (
                    <>
                      
                            <FontAwesomeIcon icon={faUserCircle} className={'mr1 f2 green pointer'}
                                onClick={() => setOpen(!open)} />
                            {open && <RightNavigation />}
                            
                    </>
                ) : (
                    <>
                            <FontAwesomeIcon icon={faBars} className={'ma1 f2 green pointer'}
                                onClick={() =>  setOpen (!open)} /> 
                            {open && <RightNavigation />}
                    </>
                )}
            </div>
        </nav>
     </main>
    );
}
