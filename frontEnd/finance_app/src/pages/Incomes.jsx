import AddIncomeForm from "../components/AddIncomeForm";
import IncomeTable from "../components/IncomeTable";
import { useEffect, useState } from "react";
import axios from "axios";

function Incomes() {
  const [incomes, setIncomes] = useState({});

  useEffect(() => {
    fetchIncomes();
  }, []);

  const fetchIncomes = () => {
    axios
      .get("http://localhost:8080/api/v1/incomes")
      .then((response) => {
        try {
          setIncomes(response.data);
        } catch (error) {
          console.error(error);
        }
      })
      .catch((error) => console.error(error));
  };

  console.log(incomes);

  const handleSubmit = (values, { resetForm }) => {
    const newIncome = {
      amount: parseFloat(values.amount),
      date: values.date.toISOString().substr(0, 10),
      name: values.name,
    };

    axios
      .post("http://localhost:8080/api/v1/incomes", newIncome)
      .then((response) => {
        if (response.status === 200) {
          resetForm();
          fetchIncomes();
        } else {
          console.log("Error adding income: unexpected status code");
        }
      })
      .catch((error) => {
        console.log("Error adding income:", error);
      });
  };

  const handleDelete = (id) => {
    const url = `http://localhost:8080/api/v1/incomes/${id}`;
    axios
      .delete(url)
      .then((response) => {
        console.log(response.data);
        fetchIncomes();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <AddIncomeForm handleSubmit={handleSubmit} />
      <IncomeTable income={incomes} handleDelete={handleDelete} />
    </>
  );
}

export default Incomes;
