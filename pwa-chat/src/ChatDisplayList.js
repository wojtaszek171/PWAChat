import React from "react";
   import "./ChatDisplayList.css";
   export default ({ chats }) => (
     <div class="container">
     <ul>
       {chats.map(chat => {''
          document.getElementById( 'bottom' ).scrollIntoView();
         return (
           <div>
           <div className="chatMessage">
             <div key={chat.id} className="box">
               <p>
                 <strong>{chat.username}: </strong> {chat.message}
               </p>
             </div>
           </div>
           </div>
         );

       })}
     </ul>
     <div id="bottom"></div>
     </div>

   );
