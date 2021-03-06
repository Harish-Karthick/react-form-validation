# Demo application to show how to use browser form validation with react

First of all, i would like to say that this is by no means the best way for form validation or anything like that. This is just a post to show how using client side form validation will significantly reduce the lines of code in a project also makes it accessibility friendly. You can know more about it from the following links - [Mozilla docs](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) and [w3.org docs](https://www.w3.org/WAI/tutorials/forms/validation/)

**So first of all what is client side form validation and what can it do?**  
Client side form validation is a validation process carried out by a browser before a form is submitted. For example : if we declare an input as type email and enter a text that does not have '@' symbol in it, when we submit the form, the browser will inform us saying that the entered value is not a valid email and stops the submit event in the form.

**How can we benefit from this?**  
There are multiple parameters that can be used in form validation, including regular expression. This can help us to do some basic form validation like minimum characters, maximum characters, minimum value, maximum value and regular expression pattern. The browser validation happens after every single change in the input, add a pseudo class `:invalid` or `:valid` to the input field based on the validation and the validation results are stored in `inputEvent.target.validity`. we can access this object to see what validations are passed and failed.

**This is a basic HTML,CSS and Javascript stuff. How can react benefit from this?**

- Usually in most form validation, we include a state "isFormValid" or something similar to monitor the validity of the form based on each input and prevent form submit the form submit if it is false. We don't have to do that because when we provide a validation parameter, browser prevents form submission if the input entered in the field is invalid.
- We don't have to write individual pieces of code to check if the length of the input is of certain length or if the input is under certain limit or not or even the regular expression evaluation. The most impressive part is browser error can actually say what part of the validation went wrong.
- Since it is client side validation, the accessibility support is built in and the browser tells what went wrong and how to fix it.

**But there is a catch**

- We hit the limitations of the client side form validation when we have to use complicated input types. For example, when we need to enter a segmented input fields like XXX-XXX-XXXX.
- When we need to use more than one regular expression to validate the inputs. For example : When validating a password, we need to show the error your password is missing a uppercase letter or missing a lowercase letter. Instead of showing the entire your password must have one lowercase letter and one uppercase letter.

In such cases we are on our own to write the form validation.

## Descriptions of the files

### FormUtils.js - All the form utitlities in one place.

<br />
This file is basically the one file that we use to control most of our form values and errors. We are setting the default values of the forms here, adding the validation parameters, and error messages to show.
<br />
<br />
The error messages have particular keys like "tooShort", "patternMismatch" and such because these are validity errors that are added to the input based on the validation errors. At any point of time when we access input.validity we will have an object

```
{
  badInput: false
  customError: false
  patternMismatch: false
  rangeOverflow: false
  rangeUnderflow: false
  stepMismatch: false
  tooLong: false
  tooShort: false
  typeMismatch: false
  valid: false
  valueMissing: true
}
```

like this. Each value will be toggled to either true or false based on validation. We consider the input to be valid only if the input.validity.valid is true.

### UseForm.js - a custom hook to manage inputchange and validation.

<br />
We are initializing two states, one for error and one for data. Both these states are objects and we use the field names to find what field needs to be changed.

onBlurValidation function is the validation function. We are validating the input when the focus is out of the input because we don't want bombard the user with errors even before they finish typing.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
