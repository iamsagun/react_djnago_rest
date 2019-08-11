import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';


class CustomForm extends React.Component {


    handleFormSubmit = (event, requestType, branchID) => {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const location = event.target.elements.location.value;

        //console.log(name, location);

        switch (requestType) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/', {
                    branch_name: name,
                    branch_location: location
                })
                    .then(res => console.log(res))
                    .catch(error => console.log(error))
                    .this.props.history.push('/')

            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/${branchID}/`, {
                    branch_name: name,
                    branch_location: location
                })
                    .then(res => console.log(res))
                    .catch(error => console.log(error));

        }


    }

    render() {

        return (
            <div>
                <Form onSubmit={(event) => this.handleFormSubmit(
                    event,
                    this.props.requestType,
                    this.props.branchID
                )} >
                    <Form.Item label="Branch Name" >
                        <Input name="name" placeholder="Enter Branch Name" />
                    </Form.Item>
                    <Form.Item label="Branch Location" >
                        <Input name="location" placeholder="Enter Branch Location" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
export default CustomForm;
