import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';



const App = () => {
  return (
    
  <div className  = "ui container comments">
 <ApprovalCard>
   <div>
     <h4>Warning!</h4>
     Are you sure you want to do this..
   </div>
   </ApprovalCard> 
    
   <ApprovalCard> 
    <CommentDetail  author = "sam" TimeAgo ="Today 4.45pm" Comments = "Nice Blog" avatar = {faker.image.avatar()}/> 
    </ApprovalCard> 


    <ApprovalCard>
    <CommentDetail  author = "sam" TimeAgo ="Today 4.45pm" Comments = "Nice Blog" avatar = {faker.image.avatar()}/> 
    </ApprovalCard> 

    <ApprovalCard>
    <CommentDetail  author = "sam" TimeAgo ="Today 4.45pm" Comments = "Nice Blog" avatar = {faker.image.avatar()}/>
    </ApprovalCard>

    <ApprovalCard>
    <CommentDetail author = "sam" TimeAgo ="Today 4.45pm" Comments = "Nice Blog post" avatar = {faker.image.avatar()}/>
     </ApprovalCard>
           </div>
  );
  };


ReactDOM.render(
     <App/>,
    document.getElementById('root')
);