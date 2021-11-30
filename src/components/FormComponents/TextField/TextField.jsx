const TextField = ({ id, name, label, required, formData, handleChange }) => {
  return (
    <div className="form-control">
      <label htmlFor={id}>{label}</label>
      <input
        required={required}
        autoComplete="off"
        type="text"
        id={id}
        name={name}
        value={[formData[name]]}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextField;
