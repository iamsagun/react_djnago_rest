import React from 'react';
import {Route} from 'react-router-dom';
import BranchList from './containers/BranchListView';
import BranchDetail from './containers/BranchDetailView';

const BaseRouter = () => (
    <div>
         <Route exact path='/' component= {BranchList}/>
         <Route exact path='/:branchID' component= {BranchDetail}/>
    </div>
);

export default BaseRouter;
