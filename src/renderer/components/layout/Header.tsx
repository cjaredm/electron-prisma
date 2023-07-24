import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import DashboardIcon from '@mui/icons-material/Dashboard';

export function Header() {
  const location = useLocation();

  return (
    <HeaderContainer>
      <Nav>
        <ul>
          {[
            { path: '/', label: <DashboardIcon />, title: 'Dashboard' }
          ].map(navItem => (
            <li key={navItem.path} className={location.pathname === navItem.path ? 'active' : ''}>
              <Link to={navItem.path} title={navItem.title}>
                {navItem.label || navItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </Nav>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-bottom: 1px solid #eee;
`;

const Nav = styled.nav`
  height: 100%;
  ul {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    height: 100%;
    list-style: none;

    li {
      height: 100%;
      font-size: 2rem;
      font-weight: 600;
      text-transform: uppercase;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      a {
        height: 100%;
        display: flex;
        align-items: center;
        color: black;
        margin: 0;
        padding: 16px;
      }
      &.active a {
        color: white;
        background-color: rgba(0, 0, 0, 0.5);
      }
      a:hover {
        color: red;
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
`;
