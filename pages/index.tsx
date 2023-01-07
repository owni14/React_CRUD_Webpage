import styled from 'styled-components';
import { theme } from '../styles/theme';

const Test = styled.div`
  color: ${theme.colors.black};
`;

const Main = () => {
  return <Test>main page</Test>;
};

export default Main;
