import { useContext } from "react";
import { ThemeContext, ThemeDark, ThemeLight } from "../context/ThemeContext";
import { BiMoon, BiSun } from "react-icons/bi";
import styled from 'styled-components';

const ButtonToggle = styled.button`
  font-size: 2rem;
  border-radius: 100%;
  border: none;
  color: ${props => props.theme && props.theme.colors && props.theme.colors.text };
  background-color: ${props => props.theme && props.theme.colors && props.theme.colors.background};
  cursor: pointer;
`;

const DarkMode = () =>{
  const [theme, setTheme] = useContext(ThemeContext);
  const handleChangeTheme = () =>{
    setTheme(theme.type === 'light' ? ThemeDark : ThemeLight )
  }
  return (
    <ButtonToggle
      theme={theme}   
      onClick={handleChangeTheme}>
      {
        theme.type === 'light' ? <BiMoon /> : <BiSun />      
      }
    </ButtonToggle>
  )

}

export default DarkMode;