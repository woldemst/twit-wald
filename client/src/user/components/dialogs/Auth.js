import {useCallback, useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../../shared/util/validators";

import { AuthContext } from "../../../shared/context/auth-context";
import Card from "../../../shared/UIElements/Card";
import Input from "../../../shared/FormElements/Input";
import Button from "../../../shared/FormElements/Button";

import "./Auth.scss";

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      const updatedInputs = {
        ...state.inputs, 
        [action.inputId]: {value: action.value, isValid: action.isValid}
      }

      let updatedFormIsValid  = true;
      for (const inputId in updatedInputs){
        if (inputId === 'isValid'){
          continue;
        }
        updatedFormIsValid = updatedFormIsValid && updatedInputs[inputId].isValid
      }
      return {
        ...state, 
        inputs: updatedInputs, 
        isValid: updatedFormIsValid

      }
    case 'SET_DATA':
      return { 
        inputs: action.inputs, 
        isValid: action.formIsValid
      }
    default:
      return state;
  }
}


const initialInputs = {
  email: {
    value: "",
    isValid: false,
  },
  password: {
    value: "",
    isValid: false,
  },
  isValid: false,
};


const Auth = (props) => {
  const auth = useContext(AuthContext)

  const navigate = useNavigate()

  const [isLoginMode, setIsLoginMode] = useState(true)

  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs, 
    isValid: false 
  })

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: 'INPUT_CHANGE', 
      value: value, 
      isValid: isValid, 
      inputId: id
    })
  }, [] )

  const setFormData = useCallback((inputData, formValidity) => {
    dispatch({
      type: 'SET_DATA', 
      inputs: inputData, 
      formIsValid: formValidity
    })
  }, [])


  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          userName: {
            value: '',
            isValid: false
          }
        },
        false
      );
    }
    setIsLoginMode(prevMode => !prevMode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();



    if(isLoginMode){
      try {
        const response = await axios.post('http://localhost:8000/api/users/login', {
          email: formState.inputs.email.value,
          password: formState.inputs.password.value
        })

        // Store the token in localStorage 
        auth.login(response.data.userId, response.data.token)

        navigate('/')
        props.onLogginSuccess()
      } catch (err) {
        console.log(err)
      }

    }else{
      try {
        const response = await axios.post('http://localhost:8000/api/users/register', {
          userName: formState.inputs.userName.value,
          email: formState.inputs.email.value, 
          password: formState.inputs.password.value
        })


        // console.log(response)
        
        navigate('/')
        // props.onLogginSuccess()

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
              className="border"
              name="userName"
              label="Name"
              onInput={inputHandler}
              validators={[VALIDATOR_MINLENGTH(5)]}
              initialValue={formState.inputs.userName.value}

              initialValid={formState.inputs.userName.isValid}
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
                initialValue={formState.inputs.email.value}
                initialValid={formState.inputs.email.isValid}
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
                initialValue={formState.inputs.password.value}
                initialValid={formState.inputs.password.isValid}
              />
            </div>


          <span className="date-of-birth">Date of birth</span>
          <p className="notice">
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </p>

          <Button
            className="auth"
            disabled={!formState.isValid}
            content={<>{isLoginMode ? 'Login' : 'Sign up'}</>}
          />
          <Button
            className="input-change"
            content={<>Switch to {isLoginMode ? 'Sign up' : 'Login'}</>}
            onClick={switchModeHandler}
          />
        </form>
      </Card>
    </>
  );
};

export default Auth;


