import styled from "styled-components";

export const PresentsSection = styled.section`
    padding: 4rem 1rem;
    margin: 0;
    width: 100%;
    height: auto; 
    text-align: center;
`;
export const HeadingNumContainer = styled.div`
    margin: 0 auto;
    margin-bottom: 2rem;
    width: 100%;
    /* max-width: calc(100vw - 15vw); */
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`
export const HeadingNum = styled.div`
    text-align: center;
`
export const SquareBoxContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
export const SquareBoxLg = styled.div`
    width: auto;
    height: calc(100vh - 25vh);
    flex: 0 1 49%;
    /* background-color: red; */
    margin: 0;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    transition: all 0.3s ease;
    /* flex-direction: column;
    align-items: center;
    justify-content: center; */

    &:hover{
        .overlay{
            opacity: 1;
        }
    }

    a.hover_link{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: transparent;
        color: transparent;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h2{
            color: white;
        }

    }
    img{
        width: 100%;
        object-fit: cover;
    }
    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: .5s ease;
        background-color: ${({ theme }) => theme.colors.yellow};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    /* h2{
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
    } */
`
export const SquareBox = styled.div`
    width: auto;
    height: calc(100vh - 25vh);
    flex: 0 1 49%;
    /* background-color: red; */
    margin: 0;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    transition: all 0.3s ease;
    overflow: hidden;
    /* &:hover{
        .overlay{
            opacity: 1;
        }
    } */

    a.hover_link{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: transparent;
        color: transparent;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h2{
            color: white;
        }

    }
    
    img{
        width: 100%;
        object-fit: cover;
    }
    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: .5s ease;
        background-color: ${({ theme }) => theme.colors.yellow};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h2{
            color: white;
        }
    }
`

export const SquareBoxMini = styled.div`
    width: 50%;
    height: auto;
    position: relative;

    /* &.yellow{
        background-color: ${({ theme }) => theme.colors.yellow};
    }
    &.blue{
        background-color: ${({ theme }) => theme.colors.blue};
    }
    &.gray{
        background-color: ${({ theme }) => theme.colors.gray};
    }
    &.pink{
        background-color: ${({ theme }) => theme.colors.pink};
} */
`