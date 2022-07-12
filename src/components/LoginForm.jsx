import styles from '../styles/LoginForm.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getMyAccount } from '../store/accountSlice'
import { useNavigate } from "react-router-dom";


function LoginForm() {
  let navigate = useNavigate();

  const dispatch = useDispatch()

  let [email, setEmail] = React.useState('')
  let [password, setPassword] = React.useState('')
  let [emailError, setEmailError] = React.useState('Email cannot be empty')
  let [passwordError, setPasswordError] = React.useState('Password cannot be empty')
  let [formValid, setFormValid] = React.useState(false)

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

  React.useEffect(() => {
    if (emailError || passwordError) setFormValid(false)
    else setFormValid(true)
  }, [passwordError, emailError])

  const handleLogin = (e)=>{
    e.preventDefault();
    dispatch(getMyAccount({ email: email, password: password }))
    navigate("../", { replace: true })
  }


  return (
    <div className={styles.wrapper}>
      <div className={styles.form_block}>
        <form onSubmit={handleLogin} >
          <h2>Log in</h2>
          {emailError && <div style={{ color: 'red', fontSize: 16, textAlign: 'center' }}>{emailError}</div>}
          <input name='e-mail' type='text' placeholder='E-mail' value={email} onChange={(e) => addEmail(e)}></input>
          {passwordError && <div style={{ color: 'red', fontSize: 16, textAlign: 'center' }}>{passwordError}</div>}
          <input name='password' type='password' placeholder='Password' value={password} onChange={(e) => addPassword(e)}></input>
          <button className={styles.btn} type='submit' disabled={!formValid} >Log in</button>
          <Link to='/Registration'><div className={styles.link}>create new account</div></Link>
        </form>
      </div>
    </div>
  )
}

export default LoginForm