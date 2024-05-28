import React from 'react'
import { ModeToggle } from './theme-toggle'
import { Separator } from './ui/separator'

const NavBar = () => {
  return (
    <>
    <nav className=' flex w-full justify-between items-center p-2'>
        <div className='flex justify-center items-center text-4xl uppercase tracking-wide  italic'>
            Blogger
        </div>
        <div className='flex flew-row justify-evenly items-center border ' >
            {/* add the search button */}
            <ModeToggle />
        </div>
    </nav>
    <Separator />
    </>
  )
}

export default NavBar