import { useContext } from "react";
import styled from "styled-components";
import Container from "../elements/Container";
import Article from "../blocks/Article";
import GridRow from "../elements/GapRow";
import { UserContext } from "../context/UserContext";
import Switches from "../blocks/Switches";
import { titleStyle } from "../collections/Style";
import { ThemeContext } from "../context/ThemeContext";


const H2Subtitle = styled.h2`
  ${titleStyle};
`;

const InnerContainer = styled.div`
  background-color: ${props => (props.theme && props.theme.colors && props.theme.colors.darkBackground) || '#14213d'};
  color: ${props => (props.theme && props.theme.colors && props.theme.colors.lightText) || '#fff'};
  padding: 2rem;
  h2{
    margin-top:0;
    margin-bottom:1rem;
  }
`;

const Articles = () => {
  const [theme] = useContext(ThemeContext);
  const [user] = useContext(UserContext);
  return (
    <InnerContainer theme={theme}>
      <Container>
        <H2Subtitle>Estos son mis articulos en Dev.io</H2Subtitle>
        <Switches />
        <GridRow>
          {user.articles.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </GridRow>
      </Container>
    </InnerContainer>
  );
};

export default styled(Articles)`
  background-color: ${(props) => props?.theme?.color?.primary || "pink"};
  padding-top: 60px;
  padding-bottom: 60px;
`;
