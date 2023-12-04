import styled from 'styled-components';

export const EpisodeItem = styled.div`
    width:100%;
    min-width: 200px;
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.iconColor};
    box-shadow: 0px 0px 5px ${props => props.theme.shadowColor};
    font-size: ${props => props.theme.textSizeTextL};
    border-radius: 10px;
    background-color: ${props => props.theme.accentColor1};
    &:hover{
      color: rgb(255, 152, 0);
    }
`;

export const Icon = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.textSizeTextL};
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Text = styled.span`
    font-size: ${props => props.theme.textSizeTextM};
    color: white;
    font-weight: 500;
    padding: 0px 10px;
    line-height: 5px;
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
`;