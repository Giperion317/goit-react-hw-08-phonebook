import styled from 'styled-components';

export const Lable = styled.label`
  width: 100px;
  margin-bottom: 10px;
`;

export const StyleInput = styled.input`
  width: 150px;
  height: 25px;
  margin-top: 5px;
  padding: 5px;
  font-family: inherit;
  border: 2px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;

  &:focus {
    outline: none;
    border: 3px solid ${props => props.theme.colors.accent};
  }
`;

export const FormButton = styled.button`
  width: 100px;
  height: 25px;
  padding: 1px;
  border-radius: 2px;
  border-color: transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.white};
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
