import React, { useState } from 'react';
import { Button, Col, Row } from 'reactstrap';
import backgroundLogin from '../../assets/image/login.png'
import Form from '../../component/Form'
import Input from '../../component/Input'
import { Services } from '../../config/api-middleware';


const Login = () => {
    const [state, setState] = useState({
        email: "",
        password: ""
    })
    const handleChange = (event) => {
        const { name, value } = event.target
        setState(previousState => ({
            ...previousState,
            [name]: value
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        Services().post('https://bootcamp-rent-cars.herokuapp.com/admin/auth/login', { ...state }).then(response => {
            localStorage.setItem("ACCESS_TOKEN", response?.data?.access_token)
            window.location.replace('/home')
        }).catch(err => console.log(err.response.data.message))
    }
    return (
        <div className='d-flex'>
            <div>
                <img className='img-stretch' src={backgroundLogin} alt="pict-login" />
            </div>
            <div className='d-flex align-self-center flex-column px-5 mx-2'>
                <div className='py-4'>
                    <div className='logo-login-cms'></div>
                </div>
                <div>
                    <h2 className='font-title-cms'>Welcome, Admin BCR</h2>
                </div>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={12} className="pb-2">
                            <Input onChange={handleChange} name="email" label={"Email"} required placeholder="Masukan Email" className="form-control" />
                        </Col>
                        <Col md={12} className="pb-2">
                            <Input onChange={handleChange} name="password" label={"Password"} required type="password" placeholder="Masukan Password" className="form-control" />
                        </Col>
                        <Col md={12} className="pt-2">
                            <Button type='submit' className='w-100' style={{ backgroundColor: "#0D28A6" }}>Sign In</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    )
}

export default Login