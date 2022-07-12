import styles from '../styles/MyAccount.module.css'
import LoginForm from './LoginForm'
import {useSelector,useDispatch } from 'react-redux'
import { logOut } from '../store/accountSlice'

function MyAccount(){

  const myAccount = useSelector((state) => state.account.myAccount)
  const dispatch = useDispatch ()

  const Out = () => {dispatch(logOut())}

if(!myAccount.email) return <LoginForm myaccount={myAccount}/>

else  return(
    <div className={styles.wrapper}>
      <div>First Name: {myAccount.firstname}</div>
      <div>Last Name: {myAccount.lastname}</div>
      <div>E-mail: {myAccount.email}</div>
      <div>Orders: {myAccount.orders}</div>
      <button className={styles.btn} onClick={Out}>LOGOUT</button>
    </div>
  )
}

export default MyAccount