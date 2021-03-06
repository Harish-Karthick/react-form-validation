import { useState } from "react";
import { formDefaults, validationErrors } from "./FormUtils";

export default function useForm() {
  const [formData, setFormData] = useState({ ...formDefaults.values });
  const [formErrors, setFormErrors] = useState({ ...formDefaults.errors });
  function formHandleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  function onBlurValidation(event) {
    //Assigning target's validity to a varaible so its easier to use
    const validity = event.target.validity;
    //If the input entered does not validate to our validation parameters
    //the valid will be false and only then we need to see what condition
    //is failed
    if (validity.valid !== true) {
      //validity object will always have the following attributes and only the values
      //of those attributes will vary based on the validation.
      // {
      //   badInput: false
      //   customError: false
      //   patternMismatch: false
      //   rangeOverflow: false
      //   rangeUnderflow: false
      //   stepMismatch: false
      //   tooLong: false
      //   tooShort: false
      //   typeMismatch: false
      //   valid: false
      //   valueMissing: true
      // }
      //we are using for..in loop to find the failed condition.
      for (let errorKey in validity) {
        if (validity[errorKey]) {
          //we have defined our possible errors and the messages to display in
          //formutils file.
          //we are using that utility to set the error for the specific invalidity.
          setFormErrors({
            ...formErrors,
            [event.target.name]: validationErrors[event.target.name][errorKey],
          });
        }
      }
    } else {
      setFormErrors({
        ...formErrors,
        [event.target.name]: "",
      });
    }
  }
  return {
    formData,
    formErrors,
    formHandleChange,
    onBlurValidation,
  };
}
