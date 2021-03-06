import React from "react";
import { validationParams } from "./FormUtils";
import useForm from "./useForm";
import "./App.css";

function App() {
  const {
    formData,
    formErrors,
    formHandleChange,
    onBlurValidation,
  } = useForm();

  const formSubmit = (event) => {
    event.preventDefault();
    alert("your form is submitted");
  };

  return (
    <form className='form-container' onSubmit={formSubmit}>
      <div className='form-group'>
        <label htmlFor='userName' className='control-label'>
          User Name
        </label>
        <input
          type='text'
          className='form-control'
          id='userName'
          name='userName'
          placeholder='Enter your user name'
          onInput={formHandleChange}
          onBlur={onBlurValidation}
          value={formData.userName}
          // Spreading out corresponding validation paramentes in the input field
          {...validationParams.username}
        />
        {formErrors.userName !== "" && (
          <p className='form-error'>{formErrors.userName}</p>
        )}
      </div>
      <div className='form-group'>
        <label htmlFor='email' className='control-label'>
          Email
        </label>
        <input
          type='email'
          className='form-control'
          id='email'
          name='email'
          placeholder='Enter your user email'
          onInput={formHandleChange}
          onBlur={onBlurValidation}
          value={formData.email}
          {...validationParams.email}
        />
        {formErrors.email !== "" && (
          <p className='form-error'>{formErrors.email}</p>
        )}
      </div>
      <div className='form-group'>
        <label htmlFor='age' className='control-label'>
          Age
        </label>
        <input
          type='number'
          className='form-control'
          id='age'
          name='age'
          placeholder='Enter your age'
          onInput={formHandleChange}
          onBlur={onBlurValidation}
          value={formData.age}
          {...validationParams.age}
        />
        {formErrors.age !== "" && (
          <p className='form-error'>{formErrors.age}</p>
        )}
      </div>
      <div className='form-group'>
        <label htmlFor='password' className='control-label'>
          Password
        </label>
        <input
          type='password'
          className='form-control'
          id='password'
          name='password'
          placeholder='Enter your password'
          onInput={formHandleChange}
          onBlur={onBlurValidation}
          value={formData.password}
          {...validationParams.password}
        />
        {formErrors.password !== "" && (
          <p className='form-error'>{formErrors.password}</p>
        )}
      </div>
      <div className='button-container'>
        <button type='submit' className='form-button'>
          Submit
        </button>
      </div>
    </form>
  );
}

export default App;
