import styles from '../styles/MyAccount.module.css'
import LoginForm from './LoginForm'
import axios from 'axios'

function MyAccount(props){

  let id = props.myaccount.id
  const logOut = () => {
    console.log(id)
    axios.delete(`http://localhost:3001/MyAccount/${id}`)
    .then (() => window.location.href="/")
  }


if(!props.myaccount.Email) return <LoginForm myaccount={props.myaccount}/>

else  return(
    <div className={styles.wrapper}>
      <div>First Name: {props.myaccount.Firstname}</div>
      <div>Last Name: {props.myaccount.Lastname}</div>
      <div>E-mail: {props.myaccount.Email}</div>
      <div>Orders: {props.myaccount.Orders}</div>
      <button onClick={logOut}>LOGOUT</button>
    </div>
  )
}

export default MyAccount