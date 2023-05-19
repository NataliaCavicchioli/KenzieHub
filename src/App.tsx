import "./App.css";
import UserProvider from "./context/UserContext";
import RoutesMain from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <UserProvider>
      <GlobalStyle />
      <RoutesMain />
    </UserProvider>
  );
}

export default App;
