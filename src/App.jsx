import Header from "./containers/Header";
import Articles from "./containers/Articles";
import Footer from "./containers/Footer";
import Layout from "./containers/Layout";
import UserProvider from "./context/UserContext";
import ThemeProvider from "./context/ThemeContext";
import styled from 'styled-components';

const App = () => {
  return (
    <UserProvider>
      <ThemeProvider>
        <Layout>
          <Header name="Luis Jesus" />
          <Articles />
          <Footer />
        </Layout>
      </ThemeProvider>
    </UserProvider>
  );
}

export default styled(App)``;