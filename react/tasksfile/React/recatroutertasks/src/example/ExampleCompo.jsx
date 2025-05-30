import React from 'react'
import { Link, Outlet } from 'react-router'

function ExampleCompo() {
  return (
    <>
        <div className="container bg-warning border border-3 ">
            <div className="row">
                <div className="col">
                    <h2><Link to="fundamentals" className='text-dark text-decoration-none'>Fundamentals</Link></h2>
                </div>
                <div className="col">
                    <h2><Link to="hooks" className='text-dark text-decoration-none'>Hooks In React</Link></h2>
                </div>
                <div className="col">
                    <h2><Link to="project" className='text-dark text-decoration-none'>Projects In React</Link></h2>
                </div>
            </div>


        <div className="col pt-5">
            <Outlet/>
        </div>
            
        </div>
    </>
  )
}

export default ExampleCompo
