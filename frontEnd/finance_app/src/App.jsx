import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Incomes from "./pages/Incomes";
import Expenses from "./pages/Expenses";
import Categories from "./pages/Categories"
import Home from "./pages/Home";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const handleUpdateIncomes = (updatedIncomes) => {
    setIncomes(updatedIncomes);
  };
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <div className="App">
          <Header />
        </div>

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/incomes" element={<Incomes />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
