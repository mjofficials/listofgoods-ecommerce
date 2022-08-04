import styled from "styled-components";

export const NavNum = styled.span`
    width: clamp(20px, 3vw, 40px);
    height: clamp(20px, 3vw, 40px);
    border: 2px solid black;
    border-radius: 100px;
    text-align: center;
    line-height: 0;
    font-size: clamp(1rem, 3vw, 2rem);
    font-weight: normal;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const CardTitle = styled.h2`
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.typography.md};
    letter-spacing: -2px;
    font-weight: 500;
    color: black;
    padding: 0;
    margin: 0;
    margin-bottom: 2rem;
`
export const CardDesc = styled.p`
    font-size: ${({ theme }) => theme.typography.sm};
    letter-spacing: -2px;
    font-weight: 500;
    color: black;
    text-transform: none;
    margin: 0;
    margin-bottom: 2rem;
`

export const HeadingBold = styled.h2`
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.typography.lg};
    letter-spacing: -2px;
    font-weight: bold;
    color: black;
    padding: 0;
    margin: 0;
    margin-bottom: 2rem;
`
export const HeadingNormal = styled.h2`
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.typography.lg};
    letter-spacing: -2px;
    font-weight: 100;
    color: black;
    padding: 0;
    margin: 0;
    margin-bottom: 2rem;
`