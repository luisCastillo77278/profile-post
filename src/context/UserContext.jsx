import { createContext, useState, useEffect } from "react";
export const UserContext = createContext();

const userJson = {
  username: "uriel_hedz",
  devToUsername: "microsoft",
  articles: []
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(userJson);

  const getDevToArticles = async () => {
    const resp = await fetch(
      `https://dev.to/api/articles?username=${user.devToUsername}`
    ).then((resp) => resp.json());

    setUser({ ...user, articles: resp });
  };

  useEffect(() => {
    getDevToArticles();
  }, [user.devToUsername]);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
