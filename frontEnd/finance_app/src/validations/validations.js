import * as Yup from "yup";

const incomeValidationSchema = Yup.object().shape({
  amount: Yup.string()
    .matches(/^\d{0,7}(?:\.\d{1,2})?$/, "Invalid amount")
    .test(
      "positive",
      "Amount must be positive",
      (value) => parseFloat(value) > 0
    )
    .required("Amount is required"),
  date: Yup.date("Date is Required")
    .typeError("Date is required")
    .nullable(false)
    .required("Date is required"),
  name: Yup.string()
    .required("Name is required")
    .matches(/^[a-zA-Z ]+$/, "Name can only contain Latin letters and spaces"),
});

const expenseValidationSchema = Yup.object().shape({
  amount: Yup.string()
    .matches(/^\d{0,7}(?:\.\d{1,2})?$/, "Invalid amount")
    .test(
      "positive",
      "Amount must be positive",
      (value) => parseFloat(value) > 0
    )
    .required("Amount is required"),
  date: Yup.date("Date is Required")
    .typeError("Date is required")
    .nullable(false)
    .required("Date is required"),
  name: Yup.string()
    .required("Name is required")
    .matches(/^[a-zA-Z ]+$/, "Name can only contain Latin letters and spaces"),
  category: Yup.string().required("The category is required"),
});

export { incomeValidationSchema, expenseValidationSchema };
