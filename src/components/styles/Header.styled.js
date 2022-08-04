import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: transparent;
    padding: 1rem;
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;
    height: auto;
`

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`


export const NavBtn = styled.button`
    background-color: transparent;
    border: 0;
    font-size: ${({ sx }) => sx === 'lg' ? 'clamp(16px, 3vw, 48px)' : "clamp(16px, 3vw, 32px)"};
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    letter-spacing: -2px;

    .rotate{
    font-size: 32px;
    margin: 0;
    margin-left: 12px;
    }
`
export const Logo = styled.img`
    width: clamp(100px, 20vw, 400px);
    height: auto;
    margin: 0;
    padding: 0;
`
export const StyledHr = styled.hr`
    border: 1px solid #000;    
    margin: 0;
    padding: 0;
`

export const NavmenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const Navmenu = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    list-style: none;
    background: transparent;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;

    li{
    margin: 0;
    padding: 0.25rem 2rem 0.25rem 0;
    text-transform: uppercase;
    font-size: clamp(16px,3vw,32px);
    letter-spacing: -2px;
    font-weight: 500;
    
    a{
        text-decoration: none;
        color: #000;
    }
    }
`
