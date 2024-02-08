import React from 'react'
import Link from 'next/link'

import Home from './Icons/Home'
import Speaker from './Icons/Speaker'
import Chat from './Icons/Chat'
import User from './Icons/User'

const Menu = () => {
  return (
    <section className='bg-gradient-to-r from-orange-500 to-yellow-400 w-screen sticky bottom-0 py-1 text-black flex justify-around items-center'>
        <Link href="/" className='flex flex-col justify-center items-center '>
            <Home size="32"/>
            <p className='font-bold text-xs'>Inicio</p>
        </Link>

        <Link href="/events" className='flex flex-col justify-center items-center '>
            <Speaker size="32"/>
            <p className='font-bold text-xs'>Eventos</p>
        </Link>

        <Link href="/chat" className='flex flex-col justify-center items-center '>
            <Chat size="32"/>
            <p className='font-bold text-xs'>Chat</p>
        </Link>

        <Link href="/perfil" className='flex flex-col justify-center items-center '>
            <User size="32"/>
            <p className='font-bold text-xs'>Perfil</p>
        </Link>
    </section>
  )
}

export default Menu
