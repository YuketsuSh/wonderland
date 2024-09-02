import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  padding: 4rem 2rem;
`;

const ServiceSection = styled.section`
  margin-bottom: 3rem;

  h3 {
    font-size: 2rem;
    color: ${({ theme }) => theme.primary || '#4B9CE2'};
  }

  p {
    margin-top: 1rem;
    color: ${({ theme }) => theme.textSecondary || '#7f8c8d'};
  }
`;

const Services = () => {
    return (
        <ServicesContainer>
            <ServiceSection>
                <h3>Configuration Minecraft/FiveM</h3>
                <p>Explication des offres, processus de configuration, exemples de réalisations...</p>
            </ServiceSection>
            <ServiceSection>
                <h3>Création de sites internet</h3>
                <p>Processus de création, technologies utilisées, portfolio...</p>
            </ServiceSection>
            <ServiceSection>
                <h3>Web Design</h3>
                <p>Présentation des compétences en design, exemples de réalisations...</p>
            </ServiceSection>
            <ServiceSection>
                <h3>Développement de bots Discord</h3>
                <p>Démonstration des fonctionnalités possibles, exemples de bots développés...</p>
            </ServiceSection>
        </ServicesContainer>
    );
};

export default Services;
