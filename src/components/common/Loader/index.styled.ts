import styled ,{keyframes} from 'styled-components';

export const Loader = styled.div`
  display: flex; 
  width: 100%;
  height: 500px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 50px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const Text = styled.span`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: ${props => props.theme.textSizeTitle};
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-weight: 600;
  color:  ${props => props.theme.textColor};
`;

