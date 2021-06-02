import React from 'react';

import { Container,Banner,Avatar,ProfileData,LocationIcon,CakeIcon,Followage,EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar/>
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Alexandre</h1>
        <h2>@al3xpisani</h2>

        <p>
          Developer at <a href="https://www.linkedin.com/in/alexandre-pisani-8662a529/">Linkedin</a>
        </p>

        <ul>
          <li>
            <LocationIcon/>
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon/>
            Nascido em 17 Dezembro 1974
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo <strong>394</strong>
          </span>
          <span>
            <strong>455</strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  )
}

export default ProfilePage;