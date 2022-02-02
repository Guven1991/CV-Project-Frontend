import React, {Component} from 'react';
import {saveCv} from "../api/apiCalls";

class AddCV extends Component {

    state = {
        name: null,
        lastname: null,
        phone: null,
        email: null,
        education: null,
        workExperience: null,
        professionalSkills: null
    }

    onChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    onClickCV = async event => {
        event.preventDefault(); //browserın bizim yerimize bisey yapmasını engellemiş oluyoruz
        const {name, lastname, phone, email, education, workExperience, professionalSkills} = this.state;
        const body = {
            name: name,
            lastname: lastname,
            phone: phone,
            email: email,
            education: education,
            workExperience: workExperience,
            professionalSkills: professionalSkills
        };
        const {push} = this.props.history;

        this.setState({pendingApiCall: true});

        try {
            const response = await saveCv(body);
            push('/');
            const authState = {
                ...response.data
            }
            this.props.onLoginSuccess(authState)
        } catch (error) {
            this.setState({error: error.response.data});
        }

    }

    render() {

        return (
            <div className="container">
                <form action="">
                    <h2 className="text-center">Add CV</h2>
                    <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input className="form-control" name="name" onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Last Name</label>
                        <input className="form-control" name="lastname" onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Phone Number</label>
                        <input className="form-control" name="phone" onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input className="form-control" name="email" onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Education</label>
                        <input className="form-control" name="education" onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Work Experience</label>
                        <input className="form-control" name="workExperience" type="number" onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Professional Skills</label>
                        <input className="form-control" name="professionalSkills" onChange={this.onChange}/>
                    </div>
                    <div className="text-center">
                        <button  className="btn btn-success mt-3" onClick={this.onClickCV}>Add</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddCV;