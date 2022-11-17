import { Header } from '../components/Header';
import { Text } from '../components/Text';
import { CategoriesContainer, Container, Footer, FooterContainer, MenuContainer } from './styles';

export function Main() {
  return(
    <>
      <Container>
        <Header/>
        <CategoriesContainer></CategoriesContainer>
        <MenuContainer></MenuContainer>
      </Container>
      <Footer>
        <FooterContainer></FooterContainer>
      </Footer>
    </>
  );
}
