import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

  const navigate = useNavigate();
  return (
    <Disclosure as="nav" className="bg-blue-gray-900 opacity-90 hover:opacity-100  py-3 ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <a onClick={() => navigate("/")}>
                <div className="flex flex-shrink-0 items-center">
                  <div className='text-white'>ENDLESS</div>
                  <img
                    className="block h-8 w-auto opacity-100 lg:hidden"
                    src="logo.png"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-16 w-auto opacity-100 lg:block"
                    src="logo.png"
                    alt="Your Company"
                  />
                  <div className='text-white'>JOURNEY</div>
                </div>
                </a>
              </div>
              <div className='text-end text-white text-2xl'><strong>JOGJA</strong> ISTIMEWA</div>
            </div>
            
          </div>
        </>
      )}
    </Disclosure>
  )
}
