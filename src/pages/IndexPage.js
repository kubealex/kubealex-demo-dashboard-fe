import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  Page,
  PageSidebar,
  Nav,
  NavExpandable,
  NavList,
  NavItem,
  Masthead,
  MastheadToggle,
  PageToggleButton,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  PageSidebarBody,
} from "@patternfly/react-core";
import { BarsIcon } from "@patternfly/react-icons";
import { ReactComponent as Scientist } from "../assets/scientist.svg";

const IndexPage = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [activeGroup, setActiveGroup] = useState(null);

  const onSelect = (result) => {
    setActiveItem(result.itemId);
    setActiveGroup(result.groupId);
  };

  const indexPageNav = (
    <Nav onSelect={onSelect} aria-label="Default global">
      <NavList>
        <NavItem itemId={0} isActive={activeItem === 0}>
          <Link to="/home">Home</Link>
        </NavItem>
        <NavItem itemId={1} isActive={activeItem === 1}>
          <Link to="/rest">REST Testing</Link>
        </NavItem>
        <NavExpandable
          title="Ansible Tools"
          groupId="nav-expandable-group-1"
          isActive={activeGroup === "nav-expandable-group-1"}
        >
          <NavItem itemId={2} isActive={activeItem === 2}>
            <Link to="/eda">EDA Demo page</Link>
          </NavItem>
          <NavItem itemId={3} isActive={activeItem === 3}>
            <Link to="/aap">AAP Controller page</Link>
          </NavItem>
        </NavExpandable>
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
      sidebar={
        <PageSidebar>
          <PageSidebarBody> {indexPageNav} </PageSidebarBody>{" "}
        </PageSidebar>
      }
      isManagedSidebar
    >
      <Outlet />
    </Page>
  );
};

export default IndexPage;
