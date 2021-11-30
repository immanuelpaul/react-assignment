import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../../redux/actions";
import UserDataForm from "../UserDataForm";
import UserList from "../UserList";

export const defaultUserData = {
  name: "Default UserName",
  company: "Default Company",
  dob: new Date()
};

const UserDataDashboard = () => {
  const initialData = {
    name: "",
    company: "",
    dob: new Date()
  };
  const [isEditable, setEditable] = useState(false);
  const [allowSubmit, setAllowSubmit] = useState(false);
  const [formData, setFormData] = useState(initialData);
  const [editIndex, setEditIndex] = useState(-1);
  const userList = useSelector((state) => state.userList);
  const dispatch = useDispatch();

  const handleAddUser = () => {
    setFormData(initialData);
    setEditIndex(-1);
    setEditable(true);
  };

  const handleEditUser = (index) => {
    if (!userList[index].name) setFormData(defaultUserData);
    else setFormData(userList[index]);
    setEditIndex(index);
    setEditable(true);
  };

  const handleChange = (e) => {
    if (e?.target)
      setFormData({ ...formData, [e.target.name]: e.target.value });
    else {
      setFormData({
        ...formData,
        dob: new Date(e)
      });
    }
    setAllowSubmit(true);
  };

  const handleSubmit = () => {
    if (editIndex === -1)
      dispatch({ type: actionTypes.addUser, userData: formData });
    else
      dispatch({
        type: actionTypes.editUser,
        userData: formData,
        index: editIndex
      });
    setEditable(false);
  };

  return isEditable ? (
    <Modal
      isOpen={isEditable}
      ariaHideApp={false}
      contentLabel="Edit user data"
    >
      <button
        type="button"
        onClick={() => {
          setEditable(false);
        }}
        className="button close-modal"
      >
        x
      </button>
      <UserDataForm
        {...{ handleSubmit, handleChange, formData, allowSubmit }}
      />
    </Modal>
  ) : (
    <div className="user-data">
      <div className="user-data__actions">
        <button
          onClick={handleAddUser}
          type="button"
          className="button user-data__edit"
        >
          Add New
        </button>
      </div>
      <UserList {...{ userList, handleEditUser }} />
    </div>
  );
};

export default UserDataDashboard;
