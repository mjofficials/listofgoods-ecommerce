import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: 'Work Sans', sans-serif;
    font-size: 1.15em;

    /* width */
    &::-webkit-scrollbar {
      width: 8px;
    }
    
    /* Track */
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 50px white; 
      border-radius: 100px;
    }
    
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: black; 
      border-radius: 100px;
    }

  }
  img{
    max-width: 100%;
    height: 100%;
  }
  .btnGroup{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

export default GlobalStyles
