import React, { useState } from 'react';
import Swal from 'sweetalert2';
import styles from './Form.module.css';

function Form() {
  const [inputsValue, setInputsValue] = useState({
    name: '',
    surname: '',
    email: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      inputsValue.email === '' ||
      inputsValue.name === '' ||
      inputsValue.surname === ''
    ) {
      console.log('something is not filled');
      Swal.fire({
        title: 'Ooops...!',
        text: 'Fill all text fields to complete regestration!',
        icon: 'error',
      });
      return;
    }

    console.log('hello');
    console.log(inputsValue);
    Swal.fire({
      title: 'Good job!',
      text: 'Your data has been successfully saved!',
      icon: 'success',
    });
  };
  return (
    <div className={styles.form}>
      <form className={styles.formContent} onSubmit={(e) => handleSubmit(e)}>
        <h2 className={styles.formTitle}>Want to follow us ?</h2>
        <label className={styles.label}>
          Name
          <input
            type="text"
            onChange={(e) =>
              setInputsValue((prevState) => ({ ...prevState, name: e.target.value }))
            }
          />
        </label>

        <label className={styles.label}>
          Surname
          <input
            type="text"
            onChange={(e) =>
              setInputsValue((prevState) => ({ ...prevState, surname: e.target.value }))
            }
          />
        </label>
        <label className={styles.label}>
          Email
          <input
            type="text"
            onChange={(e) =>
              setInputsValue((prevState) => ({ ...prevState, email: e.target.value }))
            }
          />
        </label>
        <button type="submit" className={styles.formButton}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
