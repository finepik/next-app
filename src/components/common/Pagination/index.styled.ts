import styled from 'styled-components';

export const Pagination = styled.div`
    display: flex; 
    width: 100%;
    min-height: 40px;
    flex: 0 0 auto;
    justify-content: center;
    background-color: ${props => props.theme.bachgroundColor};
    transition: 0.1s;
    margin: 20px 0px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
 
`;

export const Item = styled.div`
  cursor: pointer;
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.iconColor};
  font-weight: 500; 
  font-size: ${props => props.theme.textSizeTextM};
  height: 100%;
  border-radius: 5px;
  padding: 0px 10px;
  box-shadow: 0px 0px 3px ${props => props.theme.shadowColor};
  box-sizing: border-box;
  transition: 0.1s;
  color: black;
  &:hover{
    transition: 0.1s;
    color: white;
    background-color:${props => props.theme.accentColor1};
   
  }
  margin: 0px 10px 0px 0px;
  &:last-child{
    margin: 0px 0px 0px 0px;
  }
`;

export const ActiveItem = styled(Item)`
  color: white;
  background-color:${props => props.theme.accentColor1};
`;