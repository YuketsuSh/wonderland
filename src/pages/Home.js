import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  background: ${({ theme }) => theme.heroBackground || '#f0f0f0'};
  padding: 5rem 0;
  text-align: center;

  h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.primary || '#4B9CE2'};
  }

  p {
    font-size: 1.2rem;
    margin-top: 1rem;
  }
`;

const ServicesSection = styled.section`
  padding: 4rem 0;
  text-align: center;

  .service-item {
    margin-bottom: 2rem;
    padding: 1rem;
    background: ${({ theme }) => theme.serviceBackground || '#e3e3e3'};
    border-radius: 8px;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-10px);
      background: ${({ theme }) => theme.serviceHoverBackground || '#d3d3d3'};
    }
  }
`;

const HomePage = () => {
    return (
        <div>
            <HeroSection>
                <h1>Bienvenue chez Wonderland</h1>
                <p>Nous offrons des services en ingénierie informatique</p>
            </HeroSection>

            <ServicesSection>
                <h2>Nos Services</h2>
                <div className="service-item">Configuration Minecraft & FiveM</div>
                <div className="service-item">Création de sites internet</div>
                <div className="service-item">Web Design</div>
                <div className="service-item">Développement de bots Discord</div>
            </ServicesSection>
        </div>
    );
};

export default HomePage;
