import DatePicker from "react-date-picker";

const DateField = ({ id, name, label, required, formData, handleChange }) => {
  return (
    <div className="form-control">
      <label htmlFor={id}>{label}</label>
      <DatePicker
        required={required}
        id={id}
        name={name}
        value={new Date(formData[name])}
        onChange={handleChange}
      />
    </div>
  );
};

export default DateField;
