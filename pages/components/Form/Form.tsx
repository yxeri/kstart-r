import React, { useState,ChangeEvent } from 'react'
import FormInput from './FormInput'
import styles from '../../styles/Form.module.css'
import Navbar from '../Navbar'


interface UserProps {
    firstName: string; 
    lastName: string;
    phoneNumber: string;
    email: string;
    id: string;
}

const Form = () => {
    const [form, setForm] = useState<UserProps>({id: "", firstName: "", lastName: "", phoneNumber: "", email: ""});
    const [user, setUser] = useState<UserProps[]>([]);
    const [firstNameError, setFirstNameError] = useState<boolean>(false);
    const [lastNameError, setLastNameError] = useState<boolean>(false);
    const [phoneNumberError, setPhoneNumberError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (firstNameError === false && lastNameError === false && phoneNumberError === false && emailError === false) {
            setUser((userList) => [...userList, form]) 
        setForm({id: "", firstName: "", lastName: "", phoneNumber: "", email: ""})
        }
        else {
            alert ("fill in all the fields correctly!")
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const{name, value} = e.target
    
        setForm((prevState) => {
          return {
            ...prevState,
            [name]: value,
          }
        })
        
        if (e.target.name === 'firstName') {
            validateFirstName(e)
        }
        if (e.target.name === 'lastName') {
            validateLastName(e)
        }
        if (e.target.name === 'phoneNumber') {
            validatePhoneNumber(e)
        }
        if (e.target.name === 'email' ) {
            validateEmail(e)
        }
    }
   
    function handleBlur (e: React.FocusEvent<HTMLInputElement>) {
       
        if (e.target.name === 'firstname') {
            validateFirstName(e);
        }
        if (e.target.name === 'lastname') {
            validateLastName(e);
        }
        if (e.target.name === 'phonenumber') {
            validatePhoneNumber(e);
        }
        if (e.target.name === 'email') {
            validateEmail(e);
        }
    }
    
    function validateFirstName(e:React.FocusEvent<HTMLInputElement> | ChangeEvent<HTMLInputElement>) {
        
        if (e.target.name == 'firstName' && e.target.value.length < 2) {
            setFirstNameError(true)
        } else if(e.target.name == 'firstName') {
            setFirstNameError(false)
        }
    }

    function validateLastName(e:React.FocusEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>) {
        if (e.target.name == 'lastName' && (e.target.value.match("[^a-zA-Z]") || e.target.value.length < 2)) {
            setLastNameError(true)
        } else if (e.target.name == 'lastName') {
            setLastNameError(false)
        }
    }
    
    function validatePhoneNumber(e:React.FocusEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>) {
       
        if (e.target.name === 'phoneNumber' && e.target.value.match("[^0-9]")) {
            setPhoneNumberError(true)
        } else {
            setPhoneNumberError(false)
        }
    }

    function validateEmail(e:React.FocusEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>) {
        if (e.target.name === 'email' && e.target.value.match("^\S+@\S+\.\S+$") ) {
            setEmailError(true)
        } else {
            setEmailError(false)
        }
    }
    
    const userList = user.map(( user, id) => 
      <li key={id}>
        <div className={styles.listItems}>
            <h3>User: {form.id} </h3>
            <p><strong>Firstname:</strong> {user.firstName}</p>
            <p><strong>Lastname:</strong> {user.lastName}</p>
            <p><strong>Phone:</strong> {user.phoneNumber}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <br />
        </div> 
      </li>
    );


  return (
    <div >
        <Navbar />
        <div className={styles.formBackground}>
            <div className={styles.formContainer}>
                <h1>Form</h1>
                <br />
                <form id="form" noValidate onSubmit={handleSubmit}>
                    <FormInput 
                        name="firstName" 
                        label="Firstname:" 
                        value={form.firstName} 
                        handleChange={handleChange} 
                        error={firstNameError} 
                        onBlur={handleBlur}
                        errorMessage="Enter a valid name(+2 characters)!"
                    />
                    <FormInput  
                        name="lastName" 
                        label="Lastname:" 
                        value={form.lastName} 
                        handleChange={handleChange} 
                        error={lastNameError} 
                        onBlur={handleBlur}
                        errorMessage="Enter a valid name (A-Z a-z)!"
                    />
                    <FormInput  
                        name="phoneNumber" 
                        label="Phonenumber:" 
                        value={form.phoneNumber} 
                        handleChange={handleChange} 
                        error={phoneNumberError}  
                        onBlur={handleBlur}
                        errorMessage="Enter a valid phonenumber 0-9!"
                    />
                    <FormInput  
                        name="email" 
                        label="Email:" 
                        value={form.email} 
                        handleChange={handleChange} 
                        error={emailError}
                        onBlur={handleBlur} 
                        errorMessage="Enter @ valid email!" 
                    />
                    <input className={styles.formSubmitBtn} type="submit" value="Submit" />
                </form>
            </div>
        </div>
        <div className={styles.formOutput} >
            <ul>{userList}</ul>
        </div>
    </div>
    
  )
}

export default Form