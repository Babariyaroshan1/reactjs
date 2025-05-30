import React from 'react'
import { Link, Outlet } from 'react-router'

function ProjectMenu() {
  return (
    <>
         <div className="container">
            <ul>
                <li><Link to="task" className='text-dark text-decoration-none'>Tasks</Link></li>
                <li><Link to="Bgcolorchanger" className='text-dark text-decoration-none'>Background Color Changer</Link></li>
                <li><Link to="PasswordShowHide" className='text-dark text-decoration-none'>Password Show and Hide</Link></li>
                <li><Link to="wordcounter" className='text-dark text-decoration-none'>Word Counter</Link></li>
                <li><Link to="Lightdarkmodbtn" className='text-dark text-decoration-none'>Toggle Dark Mode and Light Mode</Link></li>
            </ul>
            <div className="row">
                <div className="col">
                    <Outlet/>
                </div>
            </div>
        </div>
    
    </>
  );
};

export default ProjectMenu;