import "./App.css";
import AppContainer from "./components/app-container/AppContainer";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import { SearchProvider } from "./components/search/SearchContext";

function App() {
  return (
    <SearchProvider>
      <AppContainer />
    </SearchProvider>
  );
}

export default App;
