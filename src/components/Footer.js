import React from 'react';

export default function Footer (props) {
  return (
    <footer className="container-fluid mt-5 mb-2 px-5">
      <h3 className="display-type">Husky UXplorers</h3>
      <div>
        <p>{'\xA9'} Cristina Villavicencio, Farrel Sudrajat, and Sunny Tian</p>
        <p>contact: <a href="mailto:  sunnytia@uw.edu">sunnytia@uw.edu</a></p>
        <p><a href="credits.html">credits</a></p>
      </div>
    </footer>
  );
}