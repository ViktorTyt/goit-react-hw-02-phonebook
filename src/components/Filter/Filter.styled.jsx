import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.span`
  font-size: ${theme.fontSizes.medium};
  font-weight: 500;
  margin-bottom: 12px;
`;
export const FilterInput = styled.input`
  width: 240px;
  height: 24px;
  margin-bottom: 16px;
`;
