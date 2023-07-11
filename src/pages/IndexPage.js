import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
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
} from "@patternfly/react-core";
import { BarsIcon } from "@patternfly/react-icons";
import { ReactComponent as Scientist } from "../assets/scientist.svg";

const IndexPage = () => {
  const [activeItem, setActiveItem] = useState(0);
  const onSelect = (result) => {
    setActiveItem(result.itemId);
  };

  const indexPageNav = (
    <Nav onSelect={onSelect} aria-label="Nav">
      <NavList>
        <NavItem itemId={0} isActive={activeItem === 0}>
          <Link to="/home">Home</Link>
        </NavItem>
        <NavItem itemId={1} isActive={activeItem === 1}>
          <Link to="/rest">REST Testing</Link>
        </NavItem>
        <NavItem itemId={2} isActive={activeItem === 2}>
          <Link to="/eda">EDA Demo page</Link>
        </NavItem>
      </NavList>
    </Nav>
  );

  return (
    <Page
      header={
        <Masthead>
          <MastheadToggle>
            <PageToggleButton variant="plain" aria-label="Global navigation">
              <BarsIcon />
            </PageToggleButton>
          </MastheadToggle>
          <MastheadMain>
            <MastheadBrand>
              <Scientist width="50px" height="50px" />
            </MastheadBrand>
          </MastheadMain>
          <MastheadContent>
            <span>kubealex Demo Dashboard</span>
          </MastheadContent>
        </Masthead>
      }
      sidebar={<PageSidebar nav={indexPageNav} />}
      isManagedSidebar
    >
      <Outlet />
    </Page>
  );
};

export default IndexPage;
