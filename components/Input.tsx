import React from 'react'

const Input = () => {
  return (
    <div className='w-screen flex justify-center p-14 font-jetbrains'>
        <div className='w-[387px] h-16 bg-grey-gradient grid grid-cols-6'>
            <div className='col-start-1 col-end-5 flex flex-row items-center'>
                <input type="text" placeholder='EMAIL' className='bg-transparent placeholder-black placeholder:pl-5'/>
            </div>
            <div className='col-start-5 col-end-7 flex flex-row justify-center items-center border-l-2 border-black'>
                <button type='submit'>ENVIAR</button>
            </div>
        </div>
    </div>
  )
}

export default Input

