import { useContext } from "react";
import styled from "styled-components";
import Container from "../elements/Container";
import SpanStyle from "../elements/SpanStyle";
import ImgCircle from "../elements/ImgCircle";
import ButtonRows from "../elements/GapRow";
import { LinkPrimaryButton, LinkSecondaryButton } from "../collections/Buttons";
import { titleStyle, rowStyle } from "../collections/Style";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from '../context/ThemeContext';

const H1Title = styled.h1`
  ${titleStyle}
  margin: 0;

  span {
    color: ${props => (props.theme && props.theme.colors && props.theme.colors.primaryText) || '#f2274c' };
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const Header = ({ className, name }) => {
  const [theme] = useContext(ThemeContext);
  const [user] = useContext(UserContext);
  return (
    <Container>
      <header className={className}>
        <InfoContainer>
          <H1Title theme={theme}>
            Bienvenid@s mi nombre es <SpanStyle>{name}</SpanStyle> soy
            Desarrollador full stack jr
          </H1Title>
          <ButtonRows>
            <LinkPrimaryButton>Ver mis proyectos</LinkPrimaryButton>
            <LinkPrimaryButton>Descargar mi CV</LinkPrimaryButton>
          </ButtonRows>
          <LinkSecondaryButton>
            O lee mis articulos ({user.articles.length})
          </LinkSecondaryButton>
        </InfoContainer>
        <ImgCircle
          src="https://scontent.fvsa2-1.fna.fbcdn.net/v/t1.6435-9/170281534_3486895538078998_7390150768740330129_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeESNGk4FWSCL_OJkk2QGR2NZPm0OkSqmWdk-bQ6RKqZZ0F49aNyypz_abRuIBRK4Y9s7XQ6wzdJ8730MV6VML-_&_nc_ohc=G1T3BMLdK6YAX8ZhIMK&_nc_ht=scontent.fvsa2-1.fna&oh=00_AT_g_Z3MiSPpIdZgMDJ91Hurrc_e-z7tTHUvIRRz5KuNqg&oe=62B37759"
          alt="profile"
        />
      </header>
    </Container>
  );
};

export default styled(Header)`
  ${rowStyle};
  justify-content: space-between;
  padding-bottom: 60px;
  padding-top: 60px;
  align-items: center;

  div{
    flex: 1;
  }

  img{
    width: 350px;
  }
`;
