import styled from 'styled-components';

export const FilterLable = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 10px;
  padding: 5px;
`;

export const FilterInput = styled.input`
  width: 100px;
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
