import React from 'react'
import { Link, Outlet } from 'react-router'
import IntroReact from './IntroReact'
import UnderstandingOfJsx from './UnderstandingOfJsx'

function FundamentalsMenu() {
  return (
    <>
        <div className="container">
            <ul>
                <li><Link to="introreact">Intro React</Link></li>
                <li><Link to="understandingOfJsx">Understanding Of Jsx</Link></li>
            </ul>



            <div className="row">
                <div className="col">
                    <Outlet/>
                </div>
            </div>
        </div>
    
    </>
  )
}


export default FundamentalsMenu;