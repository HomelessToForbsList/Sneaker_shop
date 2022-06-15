import styles from '../styles/RegistrationForm.module.css'
import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function RegistrationForm(props) {

  let navigate = useNavigate()

  let [firstname, setFirstName] = React.useState('')
  let [lastname, setLastName] = React.useState('')
  let [email, setEmail] = React.useState('')
  let [password, setPassword] = React.useState('')
  let [emailError, setEmailError] = React.useState('Email cannot be empty')
  let [passwordError, setPasswordError] = React.useState('Password cannot be empty')
  let [formValid, setFormValid] = React.useState(false)

  const addFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const addLastName = (e) => {
    setLastName(e.target.value)
  }

  const addEmail = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(e.target.value).toLocaleUpperCase()))
      setEmailError('Wrong E-mail')
    else setEmailError('')
  }

  const addPassword = (e) => {
    setPassword(e.target.value)
    setPasswordError('')
  }

  useEffect(() => {
    if (emailError || passwordError) setFormValid(false)
    else setFormValid(true)
  }, [passwordError, emailError])

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: 'https://629f5305461f8173e4e6f83a.mockapi.io/Accounts',
      data: {
        Firstname: firstname,
        Lastname: lastname,
        Email: email,
        Password: password,
        Orders: [],
        Cart: [],
      }
    })
    navigate('/')
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.form_block}>
        <form onSubmit={handleSubmit}>
          <h2>Create account</h2>
          <input name='firstname' type='text' placeholder='First name' value={firstname} onChange={(e) => addFirstName(e)}></input>
          <input name='lastname' type='text' placeholder='Last name' value={lastname} onChange={(e) => addLastName(e)}></input>
          {emailError && <div style={{ color: 'red', fontSize: 16, textAlign: 'center' }}>{emailError}</div>}
          <input name='e-mail' type='text' placeholder='E-mail' value={email} onChange={(e) => addEmail(e)}></input>
          {passwordError && <div style={{ color: 'red', fontSize: 16, textAlign: 'center' }}>{passwordError}</div>}
          <input name='password' type='password' placeholder='Password' value={password} onChange={(e) => addPassword(e)}></input>
          <button className={styles.btn} type='submit' disabled={!formValid}>Registration</button>
        </form>
      </div>
    </div>
  )
}

export default RegistrationForm