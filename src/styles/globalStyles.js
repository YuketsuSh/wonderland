import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: 'Poppins', sans-serif;
        transition: all 0.50s linear;
        margin: 0;
        padding: 0;
        line-height: 1.6;
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${({ theme }) => theme.text};
        margin-bottom: 1.5rem;
    }

    p {
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.textSecondary || theme.text};
    }

    a {
        color: ${({ theme }) => theme.text};
        text-decoration: none;
        transition: color 0.2s ease-in-out;

        &:hover {
            color: ${({ theme }) => theme.primary || '#4B9CE2'};
        }
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        margin-bottom: 1rem;
    }

    .container {
        width: 80%;
        margin: auto;
        max-width: 1200px;
        padding: 2rem;
    }
`;