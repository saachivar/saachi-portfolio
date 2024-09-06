import React from 'react';
import './App.css'; // Ensure this links correctly to your CSS file
import './images/Arrow.png'
import './images/Logo.png'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img className='logo' src={ require ('./images/Logo.png')} alt="Logo"  />
      <ul>
        <li>
          <a>
            <img className='arrow-icon' src={ require ('./images/Arrow.png')} alt="Intro Icon"  />
            intro
          </a>
        </li>
        <li>
          <a>
            <img className='arrow-icon' src={ require ('./images/Arrow.png')} alt="About Icon" />
            about
          </a>
        </li>
        <li>
          <a>
            <img className='arrow-icon' src={ require ('./images/Arrow.png')} alt="Projects Icon"  />
            projects
          </a>
        </li>
        <li>
          <a>
            <img className='arrow-icon' src={ require ('./images/Arrow.png')} alt="Thanks Icon"  />
            thanks
          </a>
        </li>
      </ul>
      
    </div>
  );
};

export default Sidebar;
