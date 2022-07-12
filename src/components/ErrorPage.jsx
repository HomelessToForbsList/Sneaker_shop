import styles from '../styles/ErrorPage.module.css'
import { removeError } from '../store/accountSlice'
import { useDispatch } from 'react-redux'
import React from 'react'


function ErrorPage(props) {

  const dispatch = useDispatch()

  React.useEffect(() => {
    setTimeout(() => {
      dispatch(removeError())
    }, 1500);
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p>
          {props.info}
        </p>
      </div>
    </div>
  )
}

export default ErrorPage