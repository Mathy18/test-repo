import React from "react";

const  CommentDetail = (props) => {
  return (
   
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src = {props.avatar}/>
        </a>
        <div className="content">
          <a href="/" className="author">{props.author}
            
          </a>
          <div className="metadata">
            <span className ="Date">{props.TimeAgo}</span>
          </div>
          
  <div className="Text">{props.Comments}</div>
        </div>
      </div>
    
  );
}
export default CommentDetagil;


