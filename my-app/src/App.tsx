
import React from 'react';
import logo from './images/first.jpg';
import './css/App.css';
import './css/mine.css';

import MenuSimple from './components/language';


function App() {

  // function createHandleMenuClick(arg0: string): any {
  //   // throw new Error('Function not implemented.');
  // }

  return (
    <div>
      <body>
        <header>
            <div className="header-content">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <h1 className="title">A.P</h1>
                <MenuSimple/>
            </div>
        </header>
        <div className='home'>
          <div className="presentation">
              <div className='hello'>Welcome.</div>
              <p>Étudiant a 42 en informatique, je cherche un emploi afin de compléter 
                ma formation académique par une expérience professionnelle qui a du sens. 
                Je suis ouvert à de nombreuses propositions en rapport avec mes études 
                et suis prêt à discuter de mon parcours plus amplement lors d’un entretien.</p>
          </div>
          <div className="project">
              <div className='project_txt'>Projects</div>
              <p>- capjwdalw</p>
              <p>- capjwdalw</p>
              <p>- capjwdalw</p>
              <p>- capjwdalw</p>
              <p>- capjwdalw</p>

          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
