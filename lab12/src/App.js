import './App.css';
import User from "./comments"
import "./index.css"
// import images 
import cactusicon from "./images/cactus_pirate_icon.svg"
import facemanicon from "./images/face_man_icon.svg"
import headseticon from "./images/ support_user_headset_icon.svg"

function App() {
  return (
    <>
      <h1> User Comments</h1>
      <main className='maincontainer'>
        <User />
        <User />
        <User />
      </main>
    </>
  );
}

export default App;