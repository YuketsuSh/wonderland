import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.footerBackground || '#333'};
  color: ${({ theme }) => theme.text};
  padding: 2rem 0;
  text-align: center;

  p {
    margin-bottom: 1rem;
  }

  a {
    margin: 0 0.5rem;
    color: ${({ theme }) => theme.text};

    &:hover {
      color: ${({ theme }) => theme.primaryHover || '#FFD700'};
    }
  }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>© 2024 Wonderland. Tous droits réservés.</p>
            <div>
                <a href="#">LinkedIn</a>
                <a href="#">Twitter</a>
                <a href="#">Facebook</a>
            </div>
        </FooterContainer>
    );
};

export default Footer;