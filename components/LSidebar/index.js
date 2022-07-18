import React from "react";

import { Avatar, Button, Box, Nav, Stack, Text, Sidebar } from "grommet";

import {
  Analytics,
  Chat,
  Clock,
  Configure,
  Help,
  Projects,
  Split,
  StatusInfoSmall,
} from "grommet-icons";


const src = "//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80";

function LSideBar() {
  return (
    <>
      <Sidebar
        className="w-32 max-w-32"
        background="brand"
        round="small"
        header={
          <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
        }
        footer={<Button icon={<Help />} hoverIndicator />}
      >
        <Nav gap="small">
          <Button icon={<Projects />} hoverIndicator />
          <Button icon={<Clock />} hoverIndicator />
        </Nav>
      </Sidebar>
    </>
  );
}

export default LSideBar;
