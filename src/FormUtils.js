export const formDefaults = {
  //Default values and number of fields to be in the form.
  values: {
    userName: "",
    email: "",
    password: "",
    age: "",
  },
  //Empty state for errors with number of fields in the form.
  errors: {
    userName: "",
    email: "",
    password: "",
    age: "",
  },
};

export const validationParams = {
  //these parameters are the validation parameters that will be imported to markup
  //there are a total of 7 built in parameters.
  // minLength
  // maxLength
  // pattern
  // min
  // max
  // step
  // required
  username: {
    minLength: 6,
    pattern: "[a-zA-Z]+",
    required: true,
  },
  email: {
    pattern:
      "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
    required: true,
  },
  age: {
    min: 18,
    required: true,
  },
  password: {
    minLength: 8,
    pattern: "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$",
    required: true,
  },
};

export const validationErrors = {
  //Possible errors and their corresponding error messages.
  userName: {
    tooShort: "User Name should be atleast 6 characters",
    patternMismatch: "User Name can only have alphabets",
    valueMissing: "User Name is required",
  },
  email: {
    typeMismatch: "Please enter a valid email",
    patternMismatch: "Please enter a valid email",
    valueMissing: "Email is required",
  },
  age: {
    rangeUnderflow: "User under 18 cannot sign up",
    valueMissing: "Age is required",
  },
  password: {
    tooShort: "Password should be atlease 8 characters",
    patternMismatch:
      "Password should have atleast one uppercase character, one lowercase character and a number",
    valueMissing: "Password is required",
  },
};
