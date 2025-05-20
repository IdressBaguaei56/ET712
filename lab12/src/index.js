import React from 'react';
import ReactDOM from 'react-dom/client';
// import all images
import cactusicon from "./images/batman_icon.png"
import facemanicon from "./images/user_icon.png"
import headsecticon from "./images/woman_icon.png"
// import files
import User_feedback from './feedback'; // Changed from './user_feedback' to './feedback'
import './index.css';
import User from './comments'
const App = function(){
return(
<>
<h1 style={{textAlign:"center"}}>Student's full name</h1>
<section className='container'>
{/* user 1 */}
<User_feedback username="Batman"><User image={cactusicon} date="11/12/24"
msg="I am Batman"/></User_feedback>
{/* user 2 */}
<User_feedback username="Peter"><User image={facemanicon} date="10/03/24"
msg="I am late!"/></User_feedback>
{/* user 3 */}
<User_feedback username="Lady"><User image={headsecticon} date="08/20/24"
msg="Get more rest"/></User_feedback>
</section>

{/* POST COMMENTS */}
<div className="postcomment">
<ul className="commentlist"></ul>
</div>
</>
)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<App />
</React.StrictMode>
);
