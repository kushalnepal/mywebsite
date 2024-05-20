// Dashboard.component.js
import React, { Component } from 'react';
import './Dashboard.component.css';
import { Button } from '../Button/Button.Component';

const defaultForm = {
    name: '',
    email: '',
    contactno: ''
};

export class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            data: { ...defaultForm },
            error: { ...defaultForm },
            isSubmitting: false,
            isLoading: false
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                [name]: value
            }
        }), () => {
            this.isValidForm(name);
        });
    }

    isValidForm = (fieldName) => {
        let errMsg;
        switch (fieldName) {
            case "name":
                errMsg = this.state.data[fieldName]
                    ? this.state.data[fieldName].length > 6
                        ? ''
                        : 'there must be 6 character'
                    : 'require field';
                break;

            case "email":
                errMsg = this.state.data[fieldName]
                    ? this.state.data[fieldName].includes('@') && this.state.data[fieldName].includes('.com')
                        ? ''
                        : 'invalid email'
                    : 'require field';
                break;
            default:
                break;

        }

        this.setState(prevState => ({
            error: {
                ...prevState.error,
                [fieldName]: errMsg
            }
        }), () => {
            const error = Object
                .values(this.state.error)
                .filter(err => err);
            this.setState({
                isValidForm: error.length === 0
            });
        });

    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div onSubmit={this.handleSubmit}>
                <div>
                    <div className='initial'>
                        {/* hi! I am kushal. */}
                    </div>
                    <div className='initial-img'>
                        {/* <img src="" alt="wallpapper"></img> */}
                    </div>
                </div>
                <div className='int'>
                    <form className="form-group">
                        <p>Contact us</p><br />
                        <label htmlFor="name">name</label>
                        <input type="text" onChange={this.handleChange} className='form-control' name='name' placeholder='name'></input>
                        <p className='danger'>{this.state.error.name}</p>
                        <label htmlFor="email">email</label>
                        <input type="text" onChange={this.handleChange} className='form-control' name='email' placeholder='Email'></input>
                        <p className='danger'>{this.state.error.email}</p>

                        <Button
                            isSubmitting={this.state.isSubmitting}
                            isValidForm={!this.state.isValidForm}
                        />
                    </form>
                </div>
            </div>
        );
    }
}
