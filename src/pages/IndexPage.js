import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  Page,
  PageSection,
  PageSectionVariants,
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
import { HomeIcon, CubesIcon, BarsIcon } from '@patternfly/react-icons';
import pfLogo from '../assets/patternfly_logo.svg'

const IndexPage = ({ children }) => {

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
    <Nav aria-label="Nav">
    <NavList>
      <NavItem>
        <Link to="/">
          <HomeIcon /> Home
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/rest">
          <CubesIcon /> REST Page
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
      <PageSection variant={PageSectionVariants.light}>
        {children}
      </PageSection>
    </Page>
  );
};

export default IndexPage;
