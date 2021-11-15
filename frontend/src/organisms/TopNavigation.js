import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/images/fitify.svg';

import { AvatarPhoto, Link, NavLink, Button } from 'src/atoms/';
import { useAuth } from 'src/utils/auth';
import { route } from 'src/Routes';

export function TopNavigation() {
  const { user, signout } = useAuth();
  const history = useHistory();

  return (
    <nav className="flex justify-between bb bg-dark">
      <Link to={route.home()} noUnderline className="b flex items-center green">
        <Logo style={{ height: 90, width: 100 }} className="mr1 f2" />
      </Link>
      <div className="flex-grow flex items-center mr4">
        {user ? (
          <>
            <NavLink exact to={route.dashboard()} className="pa3 dib-ns">
              Home
            </NavLink>
            <NavLink
              exact
              to={route.userDetail(user.userName)}
              className="pa3 dib-ns"
            >
              {user.name}
            </NavLink>
            <Button
              color="dark"
              className={'b--green ml3 pv2 f5'}
              border={true}
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
            <NavLink exact to={route.home()} className="pa3 dib-ns">
              Home
            </NavLink>
            <NavLink to={route.signIn()} className="pa3">
              Sign In
            </NavLink>
            <NavLink to={route.signUp()} className="pa3">
              Sign up
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}
