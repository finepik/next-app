import styled from 'styled-components';

export const Header = styled.header`
    display: flex; 
    width: 100%;
    min-height: 100px;
    max-height: 250px;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.backgroundColor};
    top: 0;
    position: sticky; 
    overflow: hidden;
    z-index: 50;
    @media (max-width: 768px) and (min-width: 576px)  { 
        min-height: 60px;
    }
    @media (max-width: 576px)  {
        min-height: 60px;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center; 
    width: 100%;
    height: 100%;
    padding: 0px 20px;
    background-color: ${props => props.theme.backgroundColor};
    box-sizing: border-box;

    @media (min-width: 1200px){
        width: 1200px;
    }
    @media (max-width: 1200px) and (min-width: 992px)  {
        width: 100%;
    }
    @media (max-width: 992px) and (min-width: 768px)  {
        width: 100%;
    }
    @media (max-width: 768px) and (min-width: 576px)  {     
        width: 100%;
    }
    @media (max-width: 576px)  {   
        width: 100%;
    }
`;

export const Logo = styled.div`
    display: flex;
    width: 100%;
    flex: 1 1 auto; 
    flex-direction: column;
    align-items: flex-start;
    margin: 10px 0px;
`;

export const MainImg = styled.img`
    height: 310px;
    width: 1000px;
`;


export const Buttons = styled.div`
   display:flex;
`;

