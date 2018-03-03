import React from "react";
   import './ChatInput.css';
   export default ({ text, username, handleTextChange ,handleTextChange1}) => (
     <div>
       <div className="row">
       <div className="col-xs-12">
         <div className="chat">
           <div className="col-xs-5 col-xs-offset-3">
           <p><input
             type="text"
             value={username}
             placeholder="username"
             className="form-control"
             onChange={handleTextChange1}
             onKeyDown={handleTextChange1}
             /></p>
             <textarea
               type="text"
               value={text}
               placeholder="chat here..."
               className="form-control"
               onChange={handleTextChange}
               onKeyDown={handleTextChange}
             />
           </div>
           <div className="clearfix"></div>
         </div>
       </div>
       <h4 className="greetings">Hello, {username}</h4>
     </div>
   </div>
   );
