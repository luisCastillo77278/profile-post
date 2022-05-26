import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { SecondaryButton } from '../collections/Buttons';
import styled from 'styled-components';

const Switches = ({className}) => {
  const [user, setUser] = useContext(UserContext);
  const handleChangeUser = () => {
    setUser({
      ...user,
      devToUsername: user.devToUsername === "microsoft" ? "github" : "microsoft"
    });
  };
  return (
    <p className={className}>
      También puedes ver:
      <SecondaryButton onClick={handleChangeUser}>
        {user.devToUsername === "microsoft" ? "github" : "microsoft"}
      </SecondaryButton>
    </p>
  );
};

export default styled(Switches)`
  margin-bottom: 20px;
  button{
    margin: 5px;
  }
`;
