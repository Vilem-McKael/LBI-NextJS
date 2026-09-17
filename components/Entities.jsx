import React from 'react'

export default function Entities() {
  return (
    <div className='w-full flex flex-col items-start my-8'>
        <div className='font-medium text-4xl mb-4'>
            THE LEHMANN BODDICKER GROUP
        </div>
        
        <div className='flex flex-col items-start space-y-2'>
            <div className='entity-content'>
                LehBodInc - <a href='https://lehbodinc.com' className='entity-link'>LehBodInc.com</a>
            </div>

            <div className='entity-content'>
                Sol 7 Recording & Audio Post - <a href='https://sol7recording.com' className='entity-link'>Sol7Recording.com</a>
            </div>

            <div className='entity-content'>
                Edie Lehmann Boddicker - <a href='https://edielehbod.com' className='entity-link'>EdieLehBod.com</a>
            </div>

            <div className='entity-content'>
                Synthesizer Systems Technologies - <a href='https://sstsynthrentals.com' className='entity-link'>SSTSynthRentals.com</a>
            </div>

            <div className='entity-content'>
                Synthplex, Inc. - <a href='https://synthplex.com' className='entity-link'>Synthplex.com</a>
            </div>
        </div>

    </div>
  )
}
