import React, { useState, useEffect } from "react";

const EditUserForm = ({ currentUser, updateUser, closeModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    // Set the form inputs with the current user data when the component mounts
    setName(currentUser.name);
    setEmail(currentUser.email);
    setPhone(currentUser.phone);
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form inputs
    // if (name.trim() === '' || email.trim() === '' || phone.trim() === '') {
    //   alert('Please fill in all fields');
    //   return;
    // }
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
    // Create an updated user object
    const updatedUser = {
      id: currentUser.id,
      name,
      email,
      phone
    };
    // Call the updateUser function from the parent component
    updateUser(updatedUser);
    // Close the modal
    closeModal();
  };

  const isValidEmail = (value) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <div style={styles.modalContent}>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={styles.input}
          required
        />
        <div style={styles.buttonContainer}>
          <button type="submit" style={styles.button}>
            Update User
          </button>
          <button onClick={closeModal} style={styles.button}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  modalContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  input: {
    width: "300px",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px"
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center"
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

export default EditUserForm;
