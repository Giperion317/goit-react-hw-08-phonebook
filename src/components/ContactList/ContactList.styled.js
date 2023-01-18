import styled from 'styled-components';

export const List = styled.ul`
  padding: 10px;
  width: 400px;
  margin-top: 20px;
  margin-left: 10px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const Paragraph = styled.p`
  font-weight: 500;
`;

export const Phone = styled.p`
  margin-left: auto;
  margin-right: 20px;
  font-weight: 400;
  color: ${props => props.theme.colors.accent};
`;

export const Button = styled.button`
  height: 25px;
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
