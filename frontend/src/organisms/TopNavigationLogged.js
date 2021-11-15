import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/images/fitify.svg';

import { AvatarPhoto, Link, NavLink, Button } from 'src/atoms/';
import { useAuth } from 'src/utils/auth';
import { route } from 'src/Routes';

export function TopNavigationLogged() {
  const { user, signout } = useAuth();
  const history = useHistory();
  //todo:username je tam natvrdo, místo tt123 se tam musí dát "username"
  return (
    <nav className="flex justify-between bb bg-dark">
      <Link
        to={route.home()}
        noUnderline
        className="b flex items-centegreen"
      >
        <Logo style={{ height: 90, width: 100 }} className="mr1 f2" />
      </Link>
      <div className="flex-grow flex items-center mr4">
        <NavLink to={route.dashboard('tt123')} className="pa3">
          Dashboard
        </NavLink>
        {user ? (
          <>
            <NavLink
              to={route.userDetail(user.userName)}
              noUnderline
              className="ph3 pv1 h-100 flex items-center green"
            >
              <AvatarPhoto
                className="v-mid dib mr2"
                src={user.profileImageUrl}
                alt={user.userName}
                size={2}
              />{' '}
              {user.name}
            </NavLink>
            <Button
              color="navbar"
              border
              narrow
              onClick={() => {
                signout();
                history.push(route.home());
                window.location.reload();
              }}
            >
              Sign Out
            </Button>
          </>
        ) : (
          <>
            <NavLink to={route.newTraining('tt123')} className="pa3">
              New training
            </NavLink>
            
          </>
        )}
      </div>
    </nav>
  );
}