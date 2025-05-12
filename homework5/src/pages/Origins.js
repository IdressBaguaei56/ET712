import React from 'react';
import batmanImages from '../images/batman2.jpg';

function Origins() {
  return (
    <div className="page">
      <h1>The Birth of Batman</h1>
      <div className="page-content">
        <img 
          src={batmanImages}
          alt="Young Bruce Wayne at his parents' funeral"
          className="page-image"
        />
        <div className="text-content">
          <h2>From Tragedy to Vengeance</h2>
          <p>
            The Batman origin story centers on Bruce Wayne, the son of wealthy philanthropists Thomas and 
            Martha Wayne. After witnessing his parents' murder at the hands of a mugger in Gotham City's 
            Crime Alley, young Bruce vowed to rid his city of the criminal element that took his parents' lives.
          </p>
          <p>
            Bruce spent years traveling the world, training his mind and body to the peak of human potential. 
            He studied criminology, forensics, martial arts, and numerous other disciplines. Upon returning to 
            Gotham, he realized he needed a symbol to strike fear into the hearts of criminals - something that 
            connected to his own childhood fear of bats. Thus, Batman was born.
          </p>
          <p>
            Interestingly, Batman's origin story has evolved over the decades. In early comics, little 
            attention was given to his backstory. It wasn't until 1939's Detective Comics #33 that the murder 
            of the Waynes was first depicted. The character's psychological depth has been increasingly explored 
            over time, particularly in watershed works like Frank Miller's "Batman: Year One" (1987).
          </p>
        </div>
      </div>
    </div>
  );
}

export default Origins;