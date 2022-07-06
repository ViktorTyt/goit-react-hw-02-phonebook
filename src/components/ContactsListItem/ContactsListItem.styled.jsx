import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const ContactItem = styled.li`
  width: 290px;
  display: flex;
  justify-content: space-between;
  font-size: ${theme.fontSizes.medium};
  font-weight: 500;
  // border: 1px solid ${theme.colors.dark};
  :not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const DeleteButton = styled.button`
  width: auto;
  height: auto;
  background-color: ${theme.colors.mainBackground};
`;
