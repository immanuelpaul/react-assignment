const UserList = ({ userList, handleEditUser }) => {
  var dateOptions = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric"
  };
  return (
    <div className="user-data__container">
      {userList.map((userData, index) => (
        <div className="user-data__card" key={`${userData.name}--${index}`}>
          <div className="user-data__list">
            <span className="user-data__list--label">Name: </span>
            <span className="user-data__list--data">{userData.name}</span>
          </div>
          <div className="user-data__list">
            <span className="user-data__list--label">Company: </span>
            <span className="user-data__list--data">{userData.company}</span>
          </div>
          <div className="user-data__list">
            <span className="user-data__list--label">Date of Birth: </span>
            <span className="user-data__list--data">
              {userData?.dob?.toLocaleDateString("en-UK", dateOptions)}
            </span>
          </div>
          <div className="user-data__actions">
            <button
              onClick={() => handleEditUser(index)}
              type="button"
              className="button user-data__action--edit"
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default UserList;
