import React from 'react';
import Branches from '../components/branch';
import CustomForm from '../components/form';
import axios from 'axios';


class BranchList extends React.Component {
    state = {
        branches: []
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    branches: res.data
                });
            
            })
    }

    render() {
        return (
            <div>
                <h2>Add Branch</h2>
                <CustomForm 
                requestType="post"
                branchID = {null}
                btnText="Create"
                />
                <br />
                <Branches data={this.state.branches} />
            </div>

        )
    }
}
export default BranchList;