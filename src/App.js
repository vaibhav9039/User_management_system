import React, { useState } from "react";
import AddUserForm from "./components/AddUserForm";
import UserList from "./components/UserList";
import EditUserForm from "./components/EditUserForm";

const App = () => {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    email: "",
    phone: ""
  });

  const addUser = (user) => {
    user.id = Date.now();
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone
    });
  };

  const updateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setEditing(false);
    setCurrentUser({
      id: null,
      name: "",
      email: "",
      phone: ""
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>User Management Application</h1>
      {editing ? (
        <EditUserForm
          currentUser={currentUser}
          updateUser={updateUser}
          setEditing={setEditing}
        />
      ) : (
        <>
          <div style={styles.content}>
            <AddUserForm addUser={addUser} />
          </div>
          <div style={styles.userListContainer}>
            <UserList
              users={users}
              setUsers={setUsers}
              deleteUser={deleteUser}
              editUser={editUser}
            />
          </div>
        </>
      )}
    </div>
  );
};

const styles = {
  userListContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  container: {
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    padding: "20px"
  },
  title: {
    color: "#313bac",
    marginBottom: "20px"
  },
  content: {
    margin: "20px auto",
    maxWidth: "350px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
  }
};

export default App;
