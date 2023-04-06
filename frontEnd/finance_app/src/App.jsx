import "./App.css";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Container } from "@mui/material";
import ExpensesTable from "./components/ExpensesTable";
import Header from "./components/Header";
import AddExpenseForm from "./components/AddExpensesForm";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [expenses, setExpenses] = useState({
    id1: {
      amount: 10.0,
      date: "2022-02-03",
      name: "Winesss",
    },
    id2: {
      amount: 16.0,
      date: "2022-02-03",
      name: "Cheese",
    },
    id3: {
      amount: 16.0,
      date: "2022-02-03",
      name: "Bread",
    },
  });

  const handleAddExpense = (newExpense) => {
    const newId = `id${Object.keys(expenses).length + Math.random()}`;
    console.log(newExpense);
    setExpenses((prevExpenses) => ({
      ...prevExpenses,
      [newId]: {
        ...newExpense,
      },
    }));
    console.log("expenses:", expenses);
  };

  const handleUpdateExpenses = (updatedExpenses) => {
    setExpenses(updatedExpenses);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Header />
        <Container maxWidth="md">
          <Box sx={{ my: 4 }}>
            <AddExpenseForm onAddExpense={handleAddExpense} />
            <ExpensesTable
              expense={expenses}
              onUpdateExpenses={handleUpdateExpenses}
            />
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
