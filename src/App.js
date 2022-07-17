import "./App.scss";
import data from "./assets/categories.json";
import Directory from "./components/directory/directory.component";

function App() {
  const categories = data;

  return (
    <div className="App">
      <Directory categories={categories} />
    </div>
  );
}

export default App;
