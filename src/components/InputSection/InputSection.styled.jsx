import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //   justify-content: space-around;
  background-color: ${theme.colors.gray};
  padding: 24px 16px;
`;

export const Form = styled.form`
  width: 290px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  //   background-color: ${theme.colors.gray};
`;

export const Input = styled.input`
  width: 240px;
  height: 24px;
`;

export const Button = styled.button`
  width: 168px;
  height: 48px;
  background-color: ${theme.colors.light};
  color: ${theme.colors.dark};
  font-size: 24px;
`;

export const Title = styled.h2`
  font-size: 48px;
  color: ${theme.colors.dark};
`;
