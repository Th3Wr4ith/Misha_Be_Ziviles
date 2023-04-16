import { useEffect, useState } from "react";
import axios from "axios";
import AddExpenseForm from "../components/AddExpenseForm";
import ExpenseTable from "../components/ExpenseTable";

function Expenses() {
  const [expenses, setExpenses] = useState({});

  useEffect(() => {
    fetchExpenses();
  }, []);

  //TODO: move these calls to a servive
  const fetchExpenses = () => {
    axios
      .get("http://localhost:8080/api/v1/expenses")
      .then((response) => {
        try {
          setExpenses(response.data);
        } catch (error) {
          console.error(error);
        }
      })
      .catch((error) => console.error(error));
  };

  console.log(expenses);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    const newExpense = {
      name: values.name,
      amount: parseFloat(values.amount),
      date: values.date.toISOString().substr(0, 10),
      category: values.category,
    };

    axios
      .post("http://localhost:8080/api/v1/expenses", newExpense)
      .then((response) => {
        if (response.status === 200) {
          resetForm();
          fetchExpenses();
        } else {
          console.log("Error adding income: unexpected status code");
        }
      })
      .catch((error) => {
        console.log("Error adding income:", error);
      });
  };

  const handleDelete = (id) => {
    const url = `http://localhost:8080/api/v1/expenses/${id}`;
    axios
      .delete(url)
      .then((response) => {
        console.log(response.data);
        fetchExpenses();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <AddExpenseForm handleSubmit={handleSubmit} />
      <ExpenseTable expenses={expenses} handleDelete={handleDelete} />
    </>
  );
}

export default Expenses;
