import React from 'react'
import styles from '../../styles/style'
import Button from '../../buttons/Button'

const SignIn = () => {
  return (
    <div className='bg-[#E4E9FF'>
         <div className={`${styles.container}`}>
            <div className="signUp">
                <h2>Создайте аккаунт</h2>
                <p>Выберите роль:</p>
                <div className="">
                    <Button>
                    Я соискатель
                    </Button>
                    <Button>
                    Я работодатель
                    </Button>
                </div>
                <p>У вас уже есть аккаунт? <a href="/"></a>Войти</p>
            </div>
        </div> 
   
    </div>
  )
}

export default SignIn