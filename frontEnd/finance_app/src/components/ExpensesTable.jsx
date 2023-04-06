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

function ExpensesTable({ expense, onUpdateExpenses }) {
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
    const updatedExpenses = {
      ...expense,
      [id]: {
        ...expense[id],
        [field]: value,
      },
    };
    onUpdateExpenses(updatedExpenses);
  };

  const handleDelete = (id) => {
    const newExpenses = { ...expense };
    delete newExpenses[id];
    onUpdateExpenses(newExpenses);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Expenses table">
        <TableHead>
          <TableRow>
            <TableCell>Amount</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(expense).map((key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {editingId === key ? (
                  <TextField
                    fullWidth
                    value={expense[key].amount}
                    onChange={(e) =>
                      handleFieldChange(key, "amount", e.target.value)
                    }
                  />
                ) : (
                  expense[key].amount
                )}
              </TableCell>
              <TableCell>
                {editingId === key ? (
                  <TextField
                    fullWidth
                    value={expense[key].date}
                    onChange={(e) =>
                      handleFieldChange(key, "date", e.target.value)
                    }
                  />
                ) : (
                  expense[key].date
                )}
              </TableCell>
              <TableCell>
                {editingId === key ? (
                  <TextField
                    fullWidth
                    value={expense[key].name}
                    onChange={(e) =>
                      handleFieldChange(key, "name", e.target.value)
                    }
                  />
                ) : (
                  expense[key].name
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
export default ExpensesTable;
