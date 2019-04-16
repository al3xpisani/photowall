import React, { Fragment } from "react";

import { ViewHeader, Title, Iconf, ViewTitle, ProfileTouch } from "./styles";

const Header = ({ title }) => (
  <Fragment>
    <ViewHeader>
      <ViewTitle>
        <Title>{title}</Title>
      </ViewTitle>
      <ProfileTouch>
        <Iconf name="person-outline" size={28} color="#fff" />
      </ProfileTouch>
    </ViewHeader>
  </Fragment>
);

export default Header;
