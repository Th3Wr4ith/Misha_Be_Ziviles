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
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Formik, Form, Field } from "formik";

import dayjs from "dayjs";
import "dayjs/locale/lt";

function ExpenseTable({ expenses, handleDelete }) {
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
      <Typography
        sx={{
          flex: "1 1 100%",
          display: "flex",
          justifyContent: "center",
          padding: "10px",
        }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Recent Expenses
      </Typography>
      <Table sx={{ minWidth: 650 }} aria-label="income table">
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
          {Object.keys(expenses).map((key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {editingId === key ? (
                  <TextField
                    as={TextField}
                    fullWidth
                    name="value"
                    value={expenses[key].amount}
                    onChange={(value) => setFieldValue("", value)}
                  />
                ) : (
                  expenses[key].amount
                )}
              </TableCell>
              <TableCell>
                {editingId === key ? (
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="lt"
                  >
                    <TextField
                      as={DatePicker}
                      name="date"
                      fullWidth
                      value={dayjs(expenses[key].date, "YYYY-MM-DD")}
                      onChange={(value) => setFieldValue([key], value)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                ) : (
                  expenses[key].date
                )}
              </TableCell>
              <TableCell>
                {editingId === key ? (
                  <TextField
                    as={TextField}
                    fullWidth
                    name="name"
                    value={expenses[key].name}
                    onChange={(value) => setFieldValue([key], value)}
                  />
                ) : (
                  expenses[key].name
                )}
              </TableCell>
              <TableCell component="th" scope="row">
                {editingId === key ? (
                  <TextField
                    as={TextField}
                    fullWidth
                    name="category"
                    value={expenses[key].category}
                    onChange={(value) => setFieldValue("", value)}
                  />
                ) : (
                  expenses[key].category
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
                    <IconButton aria-label="cancel" onClick={handleCancel}>
                      <CloseIcon />
                    </IconButton>
                  </>
                ) : (
                  <IconButton aria-label="edit" onClick={() => handleEdit(key)}>
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
    </TableContainer>
  );
}
export default ExpenseTable;
