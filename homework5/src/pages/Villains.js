import React from 'react';
import batmanImages from '../images/batman4.jpg';
function Villains() {
  return (
    <div className="page">
      <h1>Batman's Rogues Gallery</h1>
      <div className="page-content">
        <img 
          src= {batmanImages}
          alt="Collage of Batman's greatest villains"
          className="page-image"
        />
        <div className="text-content">
          <h2>The Dark Knight's Greatest Foes</h2>
          <p>
            Batman's rogues gallery is widely considered one of the most compelling collections of villains 
            in comic book history. What makes these antagonists fascinating is how they often reflect twisted 
            aspects of Batman's own character or psychology.
          </p>
          <p>
            The Joker, Batman's arch-nemesis, first appeared in Batman #1 (1940) and represents chaos and 
            unpredictability to counter Batman's order and control. Created by Bill Finger, Bob Kane, and 
            Jerry Robinson, the Clown Prince of Crime has evolved from a simple criminal mastermind to a 
            complex agent of nihilistic chaos, especially in works like Alan Moore's "The Killing Joke" (1988).
          </p>
          <p>
            Other iconic villains include Two-Face (Harvey Dent), whose dual nature mirrors Batman's own 
            split identity; Catwoman (Selina Kyle), whose moral ambiguity challenges Batman's rigid code; and 
            Ra's al Ghul, who shares Batman's mission to eliminate crime but through drastically different methods. 
            The Riddler, Penguin, Poison Ivy, and Scarecrow round out a gallery of foes who each challenge different 
            aspects of the Dark Knight's character and resolve.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Villains;