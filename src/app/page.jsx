"use client"


import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import Axios from 'axios';
import styles from './page.module.css'

export default function LoginPage() {

  const handleClickLogin = (values) => console.log(values)

  const validationLogin = yup.object().shape({
    email: yup.string().email("Isto não e um email").required("Este campo e obrigatorio"),
    password: yup.string().min(8, "A senha deve conter 8 caracteres").required("Este campo e obrigatorio")
  });



  return (
    <>
        <div className="conteiner">

          <h1>Login</h1>
          <Formik initialValues={{}} 
          onSubmit={handleClickLogin}
          validationSchema={validationLogin}>

            <Form className="login-form">

              <div className="login-form-group">
                <Field name="email" className="form-field" placeHolder="email"/>

                <ErrorMessage
                component="span"
                name="email"
                className="form-error"/>
                
              </div>
              <div className="login-form-group">
                <Field name="password" className="form-field" placeHolder="password"/>

                <ErrorMessage
                component="span"
                name="password"
                className="form-error"/>
              
                
              </div>
              
              <button className='button' type='submit'>Login</button>
            </Form>


            
              

          
           

              

              



              

            

          </Formik>



        </div>
    </>
  );
};
