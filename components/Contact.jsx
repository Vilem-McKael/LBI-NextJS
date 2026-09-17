import React from 'react'

export default function Contact() {
  return (
    <div className='flex flex-col items-start my-8'>
        <div className='font-medium text-4xl mb-4'>
            CONTACTS
        </div>
        <div className='space-y-2'>
            <div className='contact-block'>
                <div className='contact-header'>
                    Edie Lehmann Boddicker
                </div>
                <div className='contact-content'>
                    ELBSing@AOL.com || (818) 430-0268
                </div>
            </div>
            <div className='contact-block'>
                <div className='contact-header'>
                    Michael Lehmann Boddicker
                </div>
                <div className='contact-content'>
                    MBoddInc@gmail.com || (818) 430-0549 (text is best)
                </div>
            </div>
            <div className='contact-block'>
                <div className='contact-header'>
                    Vilém Lehmann Boddicker
                </div>
                <div className='contact-content'>
                    vilemckael@gmail.com || (818) 605-6122 (text is best)
                </div>
            </div>
            <div className='contact-block'>
                <div className='contact-header'>
                    Mailing
                </div>
                <div className='contact-content'>
                    17328 Ventura Boulevard, Suite One<br />
                    Encino, CA 91316-3904
                </div>
            </div>
        </div>
    </div>
  )
}
