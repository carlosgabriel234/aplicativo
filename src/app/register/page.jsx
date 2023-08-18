"use client"

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import Axios from 'axios';

export default function RegisterPage(){

    const handleClickRegister = (values) => {
        Axios.post("http://localhost:3001/register", {
            email: values.email,
            password: values.password
        }).then((response) =>{
            console.log(response);
        });
    };

    const validationRegister = yup.object().shape({
        email: yup.string().email("Isto não e um email").required("Este campo e obrigatorio"),
        password: yup.string().min(8, "A senha deve conter 8 caracteres").required("Este campo e obrigatorio"),
        Confirmpassword: yup.string().oneOf([yup.ref("password"), null], "As senhas não são iguais")
    
        });


    return(
        <>
            <div className="conteiner">

                <h1>Registro</h1>
                <Formik initialValues={{}} 
                onSubmit={handleClickRegister}
                validationSchema={validationRegister}>

                <Form className="login-form">

                    <div className="login-form-group">
                    <Field name="email" className="form-field" placeholder="email"/>

                    <ErrorMessage
                    component="span"
                    name="email"
                    className="form-error"/>
                    
                    </div>
                    <div className="login-form-group">
                    <Field name="password" className="form-field" placeholder="password"/>

                    <ErrorMessage
                    component="span"
                    name="password"
                    className="form-error"/>
                    
                    
                    </div>

                    <div className="login-form-group">
                    <Field name="Confirmpassword" className="form-field" placeholder="Confirmpassword"/>

                    <ErrorMessage
                    component="span"
                    name="Confirmpassword"
                    className="form-error"/>
                    
                    
                    </div>
                    
                    <button className='button' type='submit'>Registrar</button>

                </Form>


  
    


 

    

    



    

  

</Formik>



</div>

        </>
    );
};  