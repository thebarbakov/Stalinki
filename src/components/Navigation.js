import React from "react"
import { NavLink, useLocation } from 'react-router-dom'
import '../blocks/Navigation.scss'

function Navigation() {

  const nowRoute = useLocation(); 
    return (
      <div className="navigation">
          <NavLink
          className={`navigation__element navigation__element_mgu ${nowRoute.pathname === '/' ? '' : nowRoute.pathname.includes('/mgu')  ? 'navigation__element_active' : 'navigation__element_inactive' }`}
          to="/mgu/main"
          />
          <NavLink
          className={`navigation__element navigation__element_kotelnicheskaya ${nowRoute.pathname === '/' ? '' : nowRoute.pathname.includes('/kotelnicheskaya') ? 'navigation__element_active' : 'navigation__element_inactive' }`}
          to="/kotelnicheskaya/main"
          />
          <NavLink
          className={`navigation__element navigation__element_mid ${nowRoute.pathname === '/' ? '' : nowRoute.pathname.includes('/mid') ? 'navigation__element_active' : 'navigation__element_inactive' }`}
          to="/mid/main"
          />
          <NavLink
          className={`navigation__element navigation__element_ukr ${nowRoute.pathname === '/' ? '' : nowRoute.pathname.includes('/ukr') ? 'navigation__element_active' : 'navigation__element_inactive' }`}
          to="/ukr/main"
          />
          <NavLink
          className={`navigation__element navigation__element_kudrinskaya ${nowRoute.pathname === '/' ? '' : nowRoute.pathname.includes('/kudrinskaya') ? 'navigation__element_active' : 'navigation__element_inactive' }`}
          to="/kudrinskaya/main"
          />
          <NavLink
          className={`navigation__element navigation__element_vorota ${nowRoute.pathname === '/' ? '' : nowRoute.pathname.includes('/vorota') ? 'navigation__element_active' : 'navigation__element_inactive' }`}
          to="/vorota/main"
          />
          <NavLink
          className={`navigation__element navigation__element_leningradksya ${nowRoute.pathname === '/' ? '' : nowRoute.pathname.includes('/leningradksya') ? 'navigation__element_active' : 'navigation__element_inactive' }`}
          to="/leningradksya/main"
          />
      </div>
    );
}

export default Navigation