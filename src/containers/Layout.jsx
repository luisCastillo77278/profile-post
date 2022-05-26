import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import styled from 'styled-components';

const LayoutTheme = styled.div`
  background-color: ${props => (props.theme && props.theme.colors && props.theme.colors.background) || '#14213d'};
  color: ${props => (props.theme && props.theme.colors && props.theme.colors.text) || '#fff'};
  transition: all 0.5 ease-in;
`;

const Layout = ({ children }) =>{
  const [theme] = useContext(ThemeContext);
  return (
    <LayoutTheme theme={theme}>
      {children}
    </LayoutTheme>
  )
}

export default Layout;