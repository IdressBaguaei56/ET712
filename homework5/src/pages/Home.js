import React from 'react';
import batmanImages from '../images/batman3.jpg';

function Home() {
  return (
    <div className="page">
      <h1>The Dark Knight Legacy</h1>
      <div className="page-content">
        <img 
          src= {batmanImages}
          alt="Batman standing on a Gotham City rooftop"
          className="page-image"
        />
        <div className="text-content">
          <h2>The Caped Crusader's Journey</h2>
          <p>
            Welcome to Batman Chronicles, where we explore the rich history of one of DC's most iconic 
            superheroes. Created by artist Bob Kane and writer Bill Finger, Batman first appeared in 
            Detective Comics #27 in 1939 and has since become a cultural phenomenon spanning comics, 
            television, film, and beyond.
          </p>
          <p>
            Unlike many superheroes, Batman possesses no superpowers. Instead, Bruce Wayne relies on 
            his intellect, detective skills, martial arts expertise, and an arsenal of gadgets to fight 
            crime in Gotham City. This human element, combined with his tragic origin story, has helped 
            Batman endure as a compelling character for over 80 years.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;