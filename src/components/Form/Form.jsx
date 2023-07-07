import React from "react";

export default function Form(){
   
    function handleSubmit(event) {
        event.preventDefault();
      }
    

    return(
        <div>
            <form >
                <label>Email</label>
                <input 
                type="text"
                placeholder="Email"
                />

                <label>Password</label>
                <input 
                type="text"
                placeholder="Password"
                />

                <input type="submit"></input> 
            </form>
        </div>
    )
}