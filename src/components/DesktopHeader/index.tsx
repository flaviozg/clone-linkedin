import React from 'react';

import { 
  Container,
  Wrapper,
  LinkedInIcon,
  SeachInput,
  HomeIcon,
  NotificationsIcon,
  ProfileCircle,
  CaretDownIcon
} from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedInIcon />
          <SeachInput placeholder="Pesquisar" />
        </div>

        <div className="right">
          <button className="active">
            <HomeIcon />
            <span>Início</span>
          </button>
          <button>
            <NotificationsIcon />
            <span>Notificações</span>
          </button>
          <button>
            <ProfileCircle src="https://github.com/flaviozg.png" />
            <span>
              Eu <CaretDownIcon />
            </span>
          </button>
        </div>
      </Wrapper>
    </Container>
  );
}

export default DesktopHeader;