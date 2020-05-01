import React, { useMemo } from 'react';
import {
  FiLinkedin,
  FiGithub,
  FiFacebook,
  FiMail,
  FiCoffee,
  FiHeart,
  FiTerminal,
} from 'react-icons/fi';

import { Container, Profile, Nav, Contact, LinkPage, Footer } from './styles';

export default function Menu() {
  const currentUrl = useMemo(() => window.location.pathname, [
    window.location.href,
  ]);

  return (
    <Container>
      <Profile>
        <img
          src="https://scontent.fsod6-1.fna.fbcdn.net/v/t1.0-9/94887555_2937651059683524_8774660912062660608_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=eqWhPR5DbjEAX-36Fst&_nc_ht=scontent.fsod6-1.fna&oh=7eb7f8536bb8016b725d640be3bc7c87&oe=5ED23F28"
          alt="Christian Oliveira"
        />

        <h1>
          Christian <b>Oliveira</b>
        </h1>

        <h4>Software Engineer & Coordinator Comunity</h4>
      </Profile>

      <Nav>
        <LinkPage active={currentUrl === '/'} to="/">
          Home
        </LinkPage>
        <LinkPage active={currentUrl === '/professional'} to="/professional">
          Work Experience
        </LinkPage>
        <LinkPage active={currentUrl === '/portifolio'} sto="/portifolio">
          Portifólio
        </LinkPage>
        <LinkPage active={currentUrl === '/education'} to="/education">
          Education
        </LinkPage>
        <LinkPage active={currentUrl === '/hobbies'} to="/hobbies">
          Hobbies
        </LinkPage>
      </Nav>

      <Contact>
        <div>
          <a href="https://www.linkedin.com/in/christian-oliveira-645284b7/">
            <FiLinkedin size={20} />
          </a>

          <a href="https://github.com/zrninlive">
            <FiGithub size={20} />
          </a>

          <a href="https://www.facebook.com/christian.oliveira.568">
            <FiFacebook size={20} />
          </a>

          <a href="mailto:christian.soliveira@outlook.com">
            <FiMail size={20} />
          </a>
        </div>
      </Contact>

      <Footer>
        <FiCoffee size={15} color="#7d2424" />
        <FiTerminal size={15} color="#16c113" />
        <FiHeart size={18} color="#F33" />
      </Footer>
    </Container>
  );
}
