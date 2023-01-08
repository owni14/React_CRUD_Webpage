import { Props } from '../../types';
import Header from './Header';
import * as S from './Layout.style';

const Layout = (props: Props) => {
  return (
    <S.LayoutContainer>
      <Header />
      <S.MainWraper>{props.children}</S.MainWraper>
    </S.LayoutContainer>
  );
};

export default Layout;
