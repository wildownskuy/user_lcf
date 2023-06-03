import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import ViewAll from '../Components/ViewAll'

function Review() {
  window.scrollTo(0, 0)
  return (
    <div>
    <div className="fixed top-0 z-10 w-[100%] m-auto ">
<NavBar/>
    </div>
    <div className="w-[100%] bg-slate-100  mt-14">
    <ViewAll/>
    </div>
    <div className="bottom-0 w-[100%] bg-slate-100  m-auto">
    <Footer/>
    </div>
    </div>
  )
}

export default Review