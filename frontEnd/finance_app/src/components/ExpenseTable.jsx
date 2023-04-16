import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  IconButton,
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Formik, Form, Field } from "formik";
import axios from "axios";

import dayjs from "dayjs";
import "dayjs/locale/lt";
import { expenseValidationSchema } from "../validations/validations";

function expensesTable({ expenses, handleDelete }) {
  const categories = [{ value: "Food" }, { value: "Gas" }, { value: "Taxes" }];
  const [editingId, setEditingId] = useState(null);

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleConfirm = async (id, editedValue) => {
    setEditingId(null);
    try {
      await axios.put(
        `http://localhost:8080/api/v1/expenses/${id}`,
        editedValue
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  return (
    <TableContainer component={Paper}>
      <Formik
        enableReinitialize
        initialValues={expenses}
        validationSchema={expenseValidationSchema}
        onSubmit={handleConfirm}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form>
            <Table sx={{ minWidth: 650 }} aria-label="expenses table">
              <TableHead>
                <TableRow>
                  <TableCell>Amount</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(values).map((key) => (
                  <TableRow key={key}>
                    <TableCell component="th" scope="row">
                      {editingId === key ? (
                        <Field
                          as={TextField}
                          fullWidth
                          name={`${key}.amount`}
                          value={values[key].amount}
                        />
                      ) : (
                        values[key].amount
                      )}
                    </TableCell>
                    <TableCell>
                      {editingId === key ? (
                        <LocalizationProvider
                          dateAdapter={AdapterDayjs}
                          adapterLocale="lt"
                        >
                          <Field
                            as={DatePicker}
                            name={`${key}.date`}
                            fullWidth
                            value={dayjs(values[key].date, "YYYY-MM-DD")}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                      ) : (
                        values[key].date
                      )}
                    </TableCell>
                    <TableCell>
                      {editingId === key ? (
                        <Field
                          as={TextField}
                          fullWidth
                          name={`${key}.name`}
                          value={values[key].name}
                        />
                      ) : (
                        values[key].name
                      )}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {editingId === key ? (
                        <FormControl fullWidth required>
                          <InputLabel
                            id={`${key}-category-label`}
                            error={touched.category && Boolean(errors.category)}
                            required
                          >
                            Category
                          </InputLabel>
                          <Field
                            as={Select}
                            name={`${key}.category`}
                            labelId={`${key}-category-label`}
                            id={`${key}-category`}
                            label="Category"
                            value={values[key]?.category || ""}
                            onChange={(event) => {
                              setFieldValue(
                                `${key}.category`,
                                event.target.value
                              );
                            }}
                            error={
                              touched[key]?.category &&
                              Boolean(errors[key]?.category)
                            }
                          >
                            {categories.map((category) => (
                              <MenuItem
                                key={category.value}
                                value={category.value}
                              >
                                {category.value}
                              </MenuItem>
                            ))}
                          </Field>
                          <FormHelperText sx={{ color: "red" }}>
                            {touched[key]?.category && errors[key]?.category}
                          </FormHelperText>
                        </FormControl>
                      ) : (
                        values[key].category
                      )}
                    </TableCell>

                    <TableCell align="right">
                      {editingId === key ? (
                        <>
                          <IconButton
                            aria-label="save"
                            type="submit"
                            onClick={() =>
                              handleConfirm(expenses[key].id, values[key])
                            }
                          >
                            <CheckIcon />
                          </IconButton>
                          <IconButton
                            aria-label="cancel"
                            onClick={handleCancel}
                          >
                            <CloseIcon />
                          </IconButton>
                        </>
                      ) : (
                        <IconButton
                          aria-label="edit"
                          onClick={() => handleEdit(key)}
                        >
                          <EditIcon />
                        </IconButton>
                      )}
                      <IconButton
                        aria-label="delete"
                        onClick={() => handleDelete(expenses[key].id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Form>
        )}
      </Formik>
    </TableContainer>
  );
}
export default expensesTable;
