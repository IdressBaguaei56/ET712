import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="page not-found">
      <h1>404 - Page Not Found</h1>
      <img 
        src="/api/placeholder/400/300" 
        alt="Batman question mark symbol" 
        className="not-found-image"
      />
      <p>Even the World's Greatest Detective couldn't find this page.</p>
      <p>The page you're looking for has vanished into the shadows of Gotham.</p>
      <Link to="/" className="home-button">Return to the Batcave</Link>
    </div>
  );
}

export default NotFound;