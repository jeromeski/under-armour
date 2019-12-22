import React, { Fragment } from 'react';
import MenuSecondary from '../menu-secondary/MenuSecondary';
import './globalMenu.styles.css';
import MenuPrimary from '../menu-primary/MenuPrimary';

const GlobalMenu = () => {
  return (
    <Fragment>
      <MenuSecondary/>
      <MenuPrimary/>
    </Fragment>
  );
};

export default GlobalMenu;