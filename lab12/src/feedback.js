import React from "react";
import "./index.css"
import Modalwindow from "./modalwindow";

const User_feedback = function(props){
    // function to open modal window
    const openmodalwindow = function(){
        const modalwindow = document.querySelector(".modalwindow")
        modalwindow.style.display = "block"
    }
    return(
        <>
            <main className="feedbackcontainer">
                <section className="feedbackcard">
                    <div className="content"><p>{props.username}</p></div>
                    <div className="description"><p>{props.children}</p></div>
                    <div className="cardfooter">
                        <p className="addicion" onClick={openmodalwindow}><span>&#10011;</span> Add feedback</p>
                    </div>
                </section>    
            </main>  


            {/** modal window  */}
            <Modalwindow/>
        </>
    )
}

export default User_feedback