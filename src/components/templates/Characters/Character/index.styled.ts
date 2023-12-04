import styled from "styled-components"
export const Card2 = styled.div`
    position: absolute;
    aspect-ratio: 1/1/5;
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.7);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    opacity: 0;
    pointer-events: none;
    transition: 0.3s;
    padding: 20px;
    color: white; 
`;

export const Status = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    height: 30%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const StatusIcon = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: 10px;
    color:  ${props=> props.theme.accentColor1};
    font-size: ${props=> props.theme.textSizeTitle};
`;
export const StatusText = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: ${props=> props.theme.textSizeL};
`;

export const Genres = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const GenresText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: ${props=> props.theme.textSizeL};
`;

export const Details = styled.button`
    cursor: pointer;
    border: 0;
    width: 100%;
    margin: 10px 0px;
    height: 40px;
    flex: 0 0 auto;
    border-radius: 10px;
    background-color:  ${props => props.theme.accentColor1};
    color: white;
  
    font-size: ${props=> props.theme.textSizeL};
    font-weight: 600;
    &:hover{
        background-color: ${props => props.theme.accentColor2};
    }
`;

export const Character = styled.div`
    min-height: 370px;
    cursor: pointer;
    display: flex;  
    flex-direction:column ;
    background-color: ${props => props.theme.accentColor1};
    width: 100%;
    //box-shadow: 0px 0px 5px ${props => props.theme.shadowColor};
    border-radius:10px;
    overflow: hidden;
    transition: all 0.3s ease;
    &:hover{
        //box-shadow: 0px 0px 5px ${props => props.theme.accentColor1};
        transition: all 0.3s ease;
        & ${Card2}{
            transition: 0.3s;
            opacity: 1;
            pointer-events: all;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const Cards = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
`;

export const Card1 = styled.img` 
    aspect-ratio: 1/1/5;
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    min-height: 260px;
    object-fit: cover;
    box-sizing: border-box;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const Name = styled.div`
    flex: 0 0 auto;
    flex-wrap: nowrap;
    width: 100%;
    font-size: ${props => props.theme.textSizeTextL};
    letter-spacing: 1px;
    overflow: hidden;
    margin: 10px 0px 0px 0px;
    padding: 0px 10px;
    box-sizing: border-box;
    text-overflow: ellipsis;   
    white-space: nowrap;
    @media (max-width: 992px) and (min-width: 768px)  {
        font-size: ${props => props.theme.textSizeTextM900};
    }
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
`;

export const Text = styled.div`
    margin: 10px 0px 10px 0px;
    padding: 0px 10px;
    display:flex;
    flex: 0 0 auto;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;
    font-weight: 600;
    min-height: 60px;
    font-size: ${props => props.theme.textSizeTextM};
`;



