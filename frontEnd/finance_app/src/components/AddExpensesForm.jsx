import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";
import "dayjs/locale/lt";

const validationSchema = Yup.object().shape({
  amount: Yup.number()
    .required("Amount is required")
    .positive("Amount must be positive")
    .typeError("Entered amount is wrong"),
  date: Yup.date().required("Date is required"),
  name: Yup.string()
    .required("Name is required")
    .matches(/^[a-zA-Z ]+$/, "Name can only contain Latin letters and spaces"),
});

function AddExpenseForm({ onAddExpense }) {
  //   const handleSubmit = (values, { resetForm }) => {
  //     const newExpense = {
  //       amount: parseFloat(values.amount),
  //       date: values.date.toISOString().substr(0, 10),
  //       name: values.name,
  //     };

  //     axios.post("http://localhost:8080/api/setExpenses", newExpense);
  //     then((response) => {
  //       if (response.status === 200) {
  //         console.log("Expense added successfully!");
  //         onAddExpense(newExpense);
  //         resetForm();
  //       } else {
  //         console.log("Error adding expense: unexpected status code");
  //       }
  //     }).catch((error) => {
  //       console.log("Error adding expense:", error);
  //     });
  //     };

  const handleSubmit = (values, { resetForm }) => {
    const newExpense = {
      amount: parseFloat(values.amount),
      date: values.date.toISOString().substr(0, 10),
      name: values.name,
    };
    onAddExpense(newExpense);
    resetForm();
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Add New Expense
      </Typography>
      <Formik
        initialValues={{ name: "", amount: "", date: null }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ dirty, isValid, setFieldValue, values }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  name="name"
                  label="Name"
                  fullWidth
                  required
                />
                <ErrorMessage name="name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  name="amount"
                  label="Amount"
                  type="number"
                  fullWidth
                  required
                />
                <ErrorMessage name="amount" color="red" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="lt"
                >
                  <DatePicker
                    label="Date"
                    value={values.date}
                    onChange={(value) => setFieldValue("date", value)}
                    renderInput={(params) => <TextField {...params} />}
                    required
                  />
                </LocalizationProvider>
                <ErrorMessage name="date" color="red" />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!dirty || !isValid}
                >
                  Add Expense
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Paper>
  );
}

export default AddExpenseForm;
