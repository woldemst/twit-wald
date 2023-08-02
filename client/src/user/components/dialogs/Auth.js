import { useCallback, useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../../shared/util/validators";

import { AuthContext } from "../../../shared/context/auth-context";
import Card from "../../../shared/UIElements/Card";
import Input from "../../../shared/FormElements/Input";
import Button from "../../../shared/FormElements/Button";

import "./Auth.scss";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      const updatedInputs = {
        ...state.inputs,
        [action.inputId]: { value: action.value, isValid: action.isValid },
      };

      let updatedFormIsValid = true;
      for (const inputId in updatedInputs) {
        if (inputId === "isValid") {
          continue;
        }
        updatedFormIsValid =
          updatedFormIsValid && updatedInputs[inputId].isValid;
      }

      return {
        ...state,
        inputs: updatedInputs,
        isValid: updatedFormIsValid,
      };
    case "SET_DATA":
      return {
        inputs: action.inputs,
        isValid: action.formIsValid,
      };
    default:
      return state;
  }
};

const Auth = (props) => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [isLoginMode, setIsLoginMode] = useState(true);

  // separate state fro login
  const [loginState, dispatchLogin] = useReducer(formReducer, {
    inputs: {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  });

  // separate state for registration
  const [registerState, dispatchRegister] = useReducer(formReducer, {
    inputs: {
      userName: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
      birthYear: {
        value: "",
        isValid: false,
      },
      birthMonth: {
        value: "",
        isValid: false,
      },
      birthDay: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  });

  // Determine which state to use based on the mode
  const currentState = isLoginMode ? loginState : registerState;

  // console.log(currentState)

  // Determine which state has to be updated based on the mode
  const inputHandler = useCallback(
    (id, value, isValid) => {
      if (isLoginMode) {
        dispatchLogin({
          type: "INPUT_CHANGE",
          value: value,
          isValid: isValid,
          inputId: id,
        });
      } else {
        dispatchRegister({
          type: "INPUT_CHANGE",
          value: value,
          isValid: isValid,
          inputId: id,
        });
      }
    },
    [isLoginMode]
  );

  // Determine which state has to be update based on the mode
  const setFormData = useCallback(
    (inputData, formValidity) => {
      if (isLoginMode) {
        dispatchLogin({
          type: "SET_DATA",
          inputs: inputData,
          formIsValid: formValidity,
        });
      } else {
        dispatchRegister({
          type: "SET_DATA",
          inputs: inputData,
          formIsValid: formValidity,
        });
      }
    },
    [isLoginMode]
  );

  const switchModeHandler = () => {
    // console.log(currentState);
    if (!isLoginMode) {
      setFormData(
        {
          ...registerState.inputs,
        },
        registerState.inputs.email.isValid &&
          registerState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...loginState.inputs,
          userName: {
            value: "",
            isValid: false,
          },
          birthYear: {
            value: "",
            isValid: false,
          },
          birthMonth: {
            value: "",
            isValid: false,
          },
          birthDay: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };


  // options generator of days of birth for select element
  const generateDayOptions = () => {
    const dayOptions = [{ value: "", label: "" }];

    for (let day = 1; day <= 31; day++) {
      dayOptions.push({ value: `${day}`, label: day.toString() });
    }

    return dayOptions;
  };

  // options of month of birth for select element
  const monthOptions = [
    { value: "", label: "" },
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "Juni", label: "Juni" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];

  // options generator of yeas of birth for select element
  const generateYearsOptions = (startYear) => {
    const currentYear = new Date().getFullYear();
    const years = [{ value: "", label: "" }];

    for (let year = currentYear; year >= startYear; year--) {
      years.push({ value: `${year}`, label: year.toString() });
    }
    return years;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentState.isValid) {
      try {
        if (isLoginMode) {
          const apiUrl = "http://localhost:8000/api/users/login";

          const response = await axios.post(apiUrl, {
            email: currentState.inputs.email.value,
            password: currentState.inputs.password.value,
          });

          // console.log(response);
          // Store the token in localStorage
          auth.login(response.data.userId, response.data.token);
        }

        if (!isLoginMode) {
          const apiUrl = "http://localhost:8000/api/users/register";

          const response = await axios.post(apiUrl, {
            email: currentState.inputs.email.value,
            password: currentState.inputs.password.value,
            birthYear: currentState.inputs.birthYear.value,
            birthMonth: currentState.inputs.birthMonth.value,
            birthDay: currentState.inputs.birthDay.value,
          });

          console.log(response);
          // Store the token in localStorage
          auth.login(response.data.userId, response.data.token);
        }

        navigate("/");
        // props.onLogginSuccess();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <Card className="authentication">
        <h1 className="auth-headline">Create an account</h1>

        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLoginMode && (
            <Input
              id="userName"
              type="text"
              element="input"
              maxChars="50"
              className="border"
              name="userName"
              label="Name"
              onInput={inputHandler}
              validators={[VALIDATOR_MINLENGTH(5)]}
              initialValue={registerState.inputs.userName.value}
              initialValid={registerState.inputs.userName.isValid}
            />
          )}

          <div className="use-email_container">
            <Input
              id="email"
              type="email"
              element="input"
              className="border"
              name="email"
              label="Email address"
              validators={[VALIDATOR_EMAIL()]}
              onInput={inputHandler}
              initialValue={loginState.inputs.email.value}
              initialValid={loginState.inputs.email.isValid}
            />
          </div>

          <div className="passwort-input__container">
            <Input
              id="password"
              type="password"
              element="input"
              className="border"
              name="password"
              label="Password"
              onInput={inputHandler}
              validators={[VALIDATOR_MINLENGTH(5)]}
              initialValue={loginState.inputs.password.value}
              initialValid={loginState.inputs.password.isValid}
            />
          </div>

          {!isLoginMode && (
            <div className="select-date__container">
              <Input
                id="birthMonth"
                type="select"
                element="select"
                className="border month"
                name="birthMonth"
                label="Month"
                onInput={inputHandler}
                validators={[VALIDATOR_REQUIRE()]}
                initialValue={registerState.inputs.birthMonth.value} // Should be formState.inputs.birthMonth.value
                initialValid={registerState.inputs.birthMonth.isValid} // Should be formState.inputs.birthMonth.isValid
                options={monthOptions}
              />

              <Input
                id="birthDay"
                type="select"
                element="select"
                className="border day"
                name="birthDay"
                label="Day"
                onInput={inputHandler}
                validators={[VALIDATOR_REQUIRE()]}
                initialValue={registerState.inputs.birthDay.value} // Should be formState.inputs.birthDay.value
                initialValid={registerState.inputs.birthDay.isValid} // Should be formState.inputs.birthDay.isValid
                options={generateDayOptions()}
              />

              <Input
                id="birthYear"
                type="select"
                element="select"
                className="border year"
                name="birthYear"
                label="Year"
                onInput={inputHandler}
                validators={[VALIDATOR_REQUIRE()]}
                initialValue={registerState.inputs.birthYear.value} // Should be formState.inputs.birthYear.value
                initialValid={registerState.inputs.birthYear.isValid} // Should be formState.inputs.birthYear.isValid
                options={generateYearsOptions(1903)}
              />
            </div>
          )}

          <span className="date-of-birth">Date of birth</span>
          <p className="notice">
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </p>

          <Button
            className="auth"
            disabled={!currentState.isValid}
            content={<>{isLoginMode ? "Login" : "Sign up"}</>}
          />
          <Button
            className="input-change"
            content={<>Switch to {isLoginMode ? "Sign up" : "Login"}</>}
            onClick={switchModeHandler}
          />
        </form>
      </Card>
    </>
  );
};

export default Auth;
