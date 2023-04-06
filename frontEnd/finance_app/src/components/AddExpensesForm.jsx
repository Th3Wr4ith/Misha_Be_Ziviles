import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  amount: Yup.number().required("Amount is required"),
  date: Yup.date().required("Date is required"),
});

function AddExpenseForm({ onAddExpense }) {
  const handleSubmit = (values, { resetForm }) => {
    const newExpense = {
      amount: parseFloat(values.amount),
      date: values.date,
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
        {({ dirty, isValid, setFieldValue }) => (
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
                <ErrorMessage name="amount" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date"
                    value={values.date}
                    onChange={(value) => setFieldValue("date", value)}
                    renderInput={(params) => <TextField {...params} />}
                    required
                  />
                </LocalizationProvider>
                <ErrorMessage name="date" />
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
