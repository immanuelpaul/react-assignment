import React from "react";
import DateField from "../FormComponents/DateField/DateField";
import TextField from "../FormComponents/TextField/TextField";

const UserDataForm = ({
  handleSubmit,
  handleChange,
  formData,
  allowSubmit
}) => {
  return (
    <form method="POST" onSubmit={handleSubmit} className="user-data__form">
      <h3 className="user-data__form-header">Add / Edit User Information</h3>
      <TextField
        required={true}
        id="username"
        name="name"
        label="UserName *"
        handleChange={handleChange}
        formData={formData}
      />
      <TextField
        id="company"
        name="company"
        label="Company"
        handleChange={handleChange}
        formData={formData}
      />
      <DateField
        id="dob"
        name="dob"
        label="Date of Birth"
        handleChange={handleChange}
        formData={formData}
      />
      <button type="submit" disabled={!allowSubmit} className="button">
        Save
      </button>
    </form>
  );
};

export default UserDataForm;
