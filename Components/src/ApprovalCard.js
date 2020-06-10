import React from 'react';

const ApprovalCard = (props) => {
console.log(props);
return (

  <div class = "ui card">
    <div class = "content">{props.children}
  
      <div class = "extracontent">
        <div class = "ui two buttons">

           <div class = "ui basic green button">Approved</div>
            <div class = "ui basic red button">Rejected</div>
        </div>
      </div>
    </div> 
    
  </div>
);


};

export default ApprovalCard;