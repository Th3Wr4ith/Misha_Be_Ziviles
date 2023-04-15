import "./App.css";
import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box, Container } from "@mui/material";
import IncomeTable from "./components/IncomeTable";
import Header from "./components/Header";
import AddIncomeForm from "./components/AddIncomeForm";
import Incomes from "./pages/Incomes";

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
            <Route path="/" />
            <Route path="/incomes" element={<Incomes />} />
            <Route path="/incomeTable" element={<IncomeTable />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
