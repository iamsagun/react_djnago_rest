import React from 'react';
import axios from 'axios';
import { Card } from 'antd';
import CustomForm from '../components/form';

class BranchDetail extends React.Component {
    state = {
        branch: {}
    }
    componentDidMount() {
        const branchID = this.props.match.params.branchID;
        axios.get(`http://127.0.0.1:8000/api/${branchID}/`)
            .then(res => {
                this.setState({
                    branch: res.data
                });
            })
    }

    render() {
        return (
            <div>
                <Card title={this.state.branch.branch_name}>
                    <p>{this.state.branch.branch_location}</p>
                </Card>
                <CustomForm 
                requestType = "put"
                branchID ={this.props.match.params.branchID}
                btnText= "Update"
                />
            </div>

        )
    }
}
export default BranchDetail;