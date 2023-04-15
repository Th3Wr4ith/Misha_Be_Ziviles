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
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Formik, Form, Field } from "formik";

import dayjs from "dayjs";
import "dayjs/locale/lt";
import { incomeValidationSchema } from "../validations/validations";

function IncomeTable({ income, handleDelete }) {
  const [editingId, setEditingId] = useState(null);

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleConfirm = (id) => {
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const handleFieldChange = (id, field, value) => {
    const updatedincome = {
      ...income,
      [id]: {
        ...income[id],
        [field]: value,
      },
    };
    onUpdateincome(updatedincome);
  };

  return (
    <TableContainer component={Paper}>
      <Formik
        enableReinitialize
        initialValues={income}
        validationSchema={incomeValidationSchema}
        // onSubmit={onSubmit}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form>
            <Table sx={{ minWidth: 650 }} aria-label="income table">
              <TableHead>
                <TableRow>
                  <TableCell>Amount</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Name</TableCell>
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
                          name={key}
                          value={values[key].amount}
                          onChange={(value) => setFieldValue("", value)}
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
                            name={key}
                            fullWidth
                            value={dayjs(values[key].date, "YYYY-MM-DD")}
                            onChange={(value) => setFieldValue([key], value)}
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
                          name={key}
                          value={values[key].name}
                          onChange={(value) => setFieldValue([key], value)}
                        />
                      ) : (
                        values[key].name
                      )}
                    </TableCell>

                    <TableCell align="right">
                      {editingId === key ? (
                        <>
                          <IconButton
                            type="submit"
                            aria-label="confirm"
                            // onClick={() => handleConfirm(key)}
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
                        onClick={() => handleDelete(income[key].id)}
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
export default IncomeTable;
