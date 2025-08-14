import React from 'react'
import { socialImgs } from '../constants'

function Footer () {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className=' flex flex-col justify-center md:items-start items-center'>
                    <a href='/' >
                        Visit my blog
                    </a>
                </div>
                <div className='socials'>
                    {socialImgs.map((social) => (
                        <a key={social.name} className='icon' target='_blank' href={social.url}>
                            <img src={social.imgPath} alt={social.name} />
                        </a>
                    ))}
                </div>

                <div className='flex flex-col justify-center'>
                    <p className='text-center md:text-end'>
                        &copy; {new Date().getFullYear()}. All rights reserved.
                    </p>    
                </div>
            </div>
        </footer>
    )
}

export default Footer
