import styled from 'styled-components';

export const Comments = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  padding-bottom: 100px;
`

export const Comment = styled.div`
    //width: 100%;
    min-height: 100px;
    display: flex;
  padding: 20px 20px;
  flex-direction: column;
  gap: 15px;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props=> props.theme.backgroundColor};
  position: relative;
`

export const Text = styled.h4`
  font-size: ${props=> props.theme.textSizeTextL};
  letter-spacing: 1px;
  font-weight: 700;
  color: ${props => props.theme.accentColor1};
  text-transform: capitalize;
  padding: 0;
  margin: 0;
`
export const Name = styled.p`
  font-size: ${props=> props.theme.textSizeTextM};
  letter-spacing: 1px;
  font-weight: 600;
  color: ${props => props.theme.accentColor2};
  text-transform: capitalize;
  padding: 0;
  margin: 0;
`

export const User = styled.div`

    display: flex;
    gap: 10px;
    align-items: center;
`

export const MainImg = styled.img`
    height: 40px;
    width: 40px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: end;
  align-items: end;
  gap:15px;
`
export const Input = styled.textarea`
  border-radius: 10px;
  min-height: 60px;
  max-width: 100%;
  min-width: -webkit-fill-available;
  max-height: 1200px;
  font-size: ${props=> props.theme.textSizeTextM};
  letter-spacing: 1px;
  font-weight: 600;
  color: ${props => props.theme.textColorHeader};
  text-transform: capitalize;
  padding: 20px;
  margin: 0;
  background: ${props => props.theme.backgroundColor};
`

export const ButtonText = styled.button`
  color: ${props => props.theme.accentColor2};
`

export const DeleteButton = styled.button`
  width: 40px;
  height: 40px;
  color: red;
  background: inherit;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
  &:hover {
    text-decoration: underline;
  }
`