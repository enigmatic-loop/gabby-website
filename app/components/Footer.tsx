'use client'
import React from 'react'
import InstagramIcon from '../../public/images/instagram.svg'
import MailIcon from '../../public/images/mail.svg'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'



function Footer() {
  const router = useRouter()
  return (
    <footer className='footer border-t-2 border-t-gray-600 text-white flex items center justify-between'>
      <div className='container p-2'>
        <span>Gabby Leiva</span>
          <p className='text-slate-600'>
            Hidden Gem
          </p>
      </div>
      <div className='flex items-center justify-between p-3'>
        <Link href="https://www.instagram.com/guppygbby/?next=%2Ftranslastars%2F&hl=it">
          <Image className='bg-white rounded-full border m-1' src={InstagramIcon} alt='Instagram Icon' width={35} height={35}/>
        </Link>
        <button type='button' onClick={() => router.push('mailto: gleiva967@gmail.com')}>
          <Image className='bg-white rounded-full border m-1' src={MailIcon} alt='Mail Icon' width={35} height={35}/>
        </button>
      </div>
    </footer>
  )
}

export default Footer