import styled from 'styled-components';

const Widget = styled.div`
  background-color: ${({ theme }) => theme.colors.mainBg};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  margin-bottom: 24px;
  margin-top: 24px;
  overflow: hidden;

  h1,
  h2,
  h3 {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  h1 {
    color: ${({ theme }) => theme.colors.mainBg};
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;
  }
`;

Widget.Header = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: flex-start;
  padding: 18px 32px;

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px;

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Topic = styled.a`
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.contrastText};
  cursor: pointer;
  display: block;
  margin-bottom: 8px;
  outline: 0;
  padding: 10px 15px;
  text-decoration: none;
  transition: 0.3s;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export default Widget;
