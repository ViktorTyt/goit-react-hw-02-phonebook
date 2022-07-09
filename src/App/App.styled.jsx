import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 24px 15px;
`;

export const MainTitle = styled.h2`
  font-size: 36px;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
`;

export const Message = styled.p`
  font-size: ${theme.fontSizes.medium};
  font-weight: 500;
  margin-bottom: 12px;
`;
