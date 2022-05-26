import styled from 'styled-components';
import DarkMode from '../blocks/DarkMode';

const Footer = ({ className }) =>{

  return (
    <div className={className}>
      <p>
        Gracias por visitar esta página &copy; {new Date().getFullYear() }
      </p>
      <DarkMode />
    </div>
  )
}

export default styled(Footer)`
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 1rem;;
`;