import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  Page,
  PageSidebar,
  Nav,
  NavList,
  NavItem,
  Masthead,
  MastheadToggle,
  PageToggleButton,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  Brand,
} from '@patternfly/react-core';
import { HomeIcon, CubesIcon, BarsIcon, CogIcon } from '@patternfly/react-icons';
import pfLogo from '../assets/patternfly_logo.svg'

const IndexPage = () => {

  const [activeItem, setActiveItem] = React.useState(0);
  const onSelect = result => {
    setActiveItem(result.itemId);
  };

  const pageLogo = (
    <Brand src="xxx" alt="PatternFly Logo">
      <source srcSet="xxxx" />
    </Brand>
  )

  const indexPageHeader = (
    <Masthead>
      <MastheadToggle>
        <PageToggleButton variant="plain" aria-label="Global navigation">
          <BarsIcon />
        </PageToggleButton>
      </MastheadToggle>
      <MastheadMain>
        <MastheadBrand>
          <img src={pfLogo} alt="Patterfly Logo" />
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>
      <span>Content</span>
    </MastheadContent>
    </Masthead>
  );

  const indexPageNav = (
    <Nav onSelect={onSelect} aria-label="Nav">
    <NavList>
      <NavItem itemId={0} isActive={activeItem === 0}>
        <Link to="/home">
          Home
        </Link>
      </NavItem>
      <NavItem itemId={1} isActive={activeItem === 1}>
        <Link to="/rest">
          REST Page
        </Link>
        </NavItem>
        <NavItem itemId={2} isActive={activeItem === 2}>
        <Link to="/eda">
          EDA Page
        </Link>
      </NavItem>
    </NavList>
  </Nav>
  )

  const indexPageSidebar = (
    <PageSidebar nav={indexPageNav} />
  );

  return (
    <Page header={indexPageHeader} sidebar={indexPageSidebar} isManagedSidebar>
        <Outlet/>
    </Page>
  );
};

export default IndexPage;
