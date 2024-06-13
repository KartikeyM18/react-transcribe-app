import React from 'react'

function Header() {
    return (
        <header className='flex items-center justify-between p-4'>

            <a href="/" className='text-2xl font-semibold'>Tran<span className='text-blue-400'>Scribe</span></a>


            <a href="/" className='text-blue-400 text-lg'>New</a>

        </header>
    )
}

export default Header