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
import dayjs from "dayjs";
import "dayjs/locale/lt";

function IncomeTable({ income, onUpdateIncomes }) {
  const [incomes, setIncomes] = useState({});

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
    const updatedIncomes = {
      ...income,
      [id]: {
        ...income[id],
        [field]: value,
      },
    };
    onUpdateincomes(updatedIncomes);
  };

  const handleDelete = (id) => {
    const newIncomes = { ...income };
    delete newIncome[id];
    onUpdateIncomes(newIncome);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="incomes table">
        <TableHead>
          <TableRow>
            <TableCell>Amount</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(income).map((key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {editingId === key ? (
                  <TextField
                    fullWidth
                    value={income[key].amount}
                    onChange={(e) =>
                      handleFieldChange(key, "amount", e.target.value)
                    }
                  />
                ) : (
                  income[key].amount
                )}
              </TableCell>
              <TableCell>
                {editingId === key ? (
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="lt"
                  >
                    <DatePicker
                      fullWidth
                      value={dayjs(income[key].date, "YYYY-MM-DD")}
                      onChange={(newValue) =>
                        handleFieldChange(
                          key,
                          "date",
                          newValue.toISOString().split("T")[0]
                        )
                      }
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                ) : (
                  income[key].date
                )}
              </TableCell>
              <TableCell>
                {editingId === key ? (
                  <TextField
                    fullWidth
                    value={income[key].name}
                    onChange={(e) =>
                      handleFieldChange(key, "name", e.target.value)
                    }
                  />
                ) : (
                  income[key].name
                )}
              </TableCell>
              <TableCell align="right">
                {editingId === key ? (
                  <>
                    <IconButton
                      aria-label="confirm"
                      onClick={() => handleConfirm(key)}
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
                  onClick={() => handleDelete(key)}
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
export default IncomeTable;
