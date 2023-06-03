import React from 'react'
import Jobs from './Jobs'

function Section() {
  return (
    <div>
      <div className="section bg-section mb-32">
        <div className="container">
          <div className="row grid grid-rows-1 grid-flow-col gap-4 pl-48">
            <img src="section.jpg" alt="" className=' shadow-lg w-auto h-[55rem] -mt-28 mr-40 ' />
            <div className="container h-auto">
              <div className="content-title mt-24 pb-10 border-b-8  border-yellow-600 text-5xl text-left font-extrabold text-textColor">
                <h1>Yogyakarta</h1>
              </div>
              <div className="content-subtitle text-start text-textColor mt-5 ">
                Daerah Istimewa Yogyakarta adalah Daerah Istimewa
               setingkat provinsi di Indonesia yang merupakan peleburan dari Negara
                Kesultanan Yogyakarta dan Negara Kadipaten Paku Alaman.
                </div>
            </div>
          </div>
          <div className="card">
            <Jobs/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section