import "./UserList.css";

import { useState } from "react";

const UsersList = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    userType: "",
  });

  const [users, setUsers] = useState([]);

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;

    setFormData((prevDataForm) => {
      return { ...prevDataForm, [name]: target.value };
    });
  };

  const [isListVisible, setListVisible] = useState(false);

  const setUser = (e) => {
    e.preventDefault();
    setUsers(users.concat({ ...formData, id: Date.now() }));
    setListVisible(true);
  };

  const style = { display: isListVisible ? "grid" : "none" };

  const removeUser = (id) => {
    console.log(id);
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  return (
    <div className="usersList">
      <form onSubmit={setUser}>
        <label htmlFor="username">User name</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          onChange={handleInputChange}
          value={formData.username}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          onChange={handleInputChange}
          value={formData.email}
        />
        <label htmlFor="userType">User type</label>
        <select name="userType" id="userType" onChange={handleInputChange}>
          <option>Chose user type:</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button>Save</button>
      </form>

      <div className="list" style={style}>
        {users.map((user) => {
          return (
            <div
              className="userItem"
              key={user.id}
              onClick={() => removeUser(user.id)}
            >
              <p className="paragraphLabel">User name: </p>
              <p className="paragraphUserData">{user.username}</p>
              <p className="paragraphLabel">User email: </p>
              <p className="paragraphUserData">{user.email}</p>
              <p className="paragraphLabel">User type: </p>
              <p className="paragraphUserData">{user.userType}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersList;
