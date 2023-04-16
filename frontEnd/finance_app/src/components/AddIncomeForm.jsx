import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  FormControl,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "dayjs/locale/lt";
import { incomeValidationSchema } from "../validations/validations";

function AddIncomeForm({ handleSubmit }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleAccordionChange = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Accordion expanded={isExpanded} onChange={handleAccordionChange}>
      <AccordionSummary
        expandIcon={isExpanded ? <RemoveIcon /> : <AddIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>ADD INCOMES</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h5" gutterBottom>
            Add an income
          </Typography>
          <Formik
            initialValues={{ name: "", amount: "", date: null }}
            validationSchema={incomeValidationSchema}
            onSubmit={handleSubmit}
          >
            {({
              dirty,
              isValid,
              setFieldValue,
              values,
              errors,
              touched,
              setFieldTouched,
            }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      name="name"
                      label="Name"
                      fullWidth
                      required
                      error={touched.name && Boolean(errors.name)}
                      helperText={touched.name && errors.name}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      name="amount"
                      label="Amount"
                      type="number"
                      fullWidth
                      required
                      error={touched.amount && Boolean(errors.amount)}
                      helperText={touched.amount && errors.amount}
                      onChange={(e) => {
                        const regex = /^[0-9,.\b]{0,7}(?:\.\d{0,2})?$/;
                        const isValid = regex.test(e.target.value);
                        if (isValid) {
                          setFieldValue("amount", e.target.value);
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        adapterLocale="lt"
                      >
                        <Field
                          as={DatePicker}
                          name="date"
                          label="Date *"
                          value={values.date}
                          onChange={(value) => setFieldValue("date", value)}
                          renderInput={(params) => <TextField {...params} />}
                          onBlur={() => setFieldTouched("date", true)}
                          required
                          error={touched.date}
                          helperText={touched.date}
                        />
                      </LocalizationProvider>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={!dirty || !isValid}
                    >
                      Add
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Paper>
      </AccordionDetails>
    </Accordion>
  );
}

export default AddIncomeForm;
