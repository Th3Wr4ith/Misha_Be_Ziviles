import AddIncomeForm from "../components/AddIncomeForm";
import IncomeTable from "../components/IncomeTable";
import { useEffect, useState } from "react";

function Incomes() {
  const [incomes, setIncomes] = useState({});

  useEffect(() => {
    fetchIncomes();
  }, []);

  const fetchIncomes = () => {
    fetch("http://localhost:8080/api/v1/incomes")
      .then((response) => response.json())
      .then((data) => {
        try {
          setIncomes(data);
        } catch (error) {
          console.error(error);
        }
      })
      .catch((error) => console.error(error));
  };

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
          fetchIncomes(); // update the state after successful POST request
        } else {
          console.log("Error adding income: unexpected status code");
        }
      })
      .catch((error) => {
        console.log("Error adding income:", error);
      });
  };

  return (
    <>
      <AddIncomeForm handleSubmit={handleSubmit} />
      <IncomeTable income={incomes} />
    </>
  );
}

export default Incomes;
