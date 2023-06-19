import React, { useState } from "react";
import Modal from "react-modal";
import EditUserForm from "./EditUserForm";

const UserList = ({ users, setUsers, deleteUser, editUser }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedUser, setEditedUser] = useState(null);

  const openModal = (user) => {
    setIsModalOpen(true);
    setEditedUser(user);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const updateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    closeModal();
  };

  return (
    <div style={styles.container}>
      {users.map((user) => (
        <div key={user.id} style={styles.card}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <div style={styles.buttonContainer}>
            <button onClick={() => openModal(user)} style={styles.button}>
              Edit
            </button>
            <button onClick={() => deleteUser(user.id)} style={styles.button}>
              Delete
            </button>
          </div>
        </div>
      ))}

      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        {editedUser && (
          <EditUserForm
            currentUser={editedUser}
            updateUser={updateUser}
            closeModal={closeModal}
          />
        )}
      </Modal>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "20px auto",
    maxWidth: "800px"
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    width: "250px",
    margin: "10px",
    textAlign: "center"
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px"
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    marginRight: "10px"
  }
};

export default UserList;
