import React from 'react'

interface Props {
    darkMode: Boolean
}

const ToggleDarkMode: React.FC<Props> = ({ darkMode }) => {
    return (
        <div className='flex flex-row items center'>
            <small>light</small>
            <div className='w-12 h-5.5 mx-1 rounded-3xl bg-[--color-gray-4]'>
                <div className={`${darkMode ? 'toggleDark' : 'toggleLight'} w-5 h-5 m-0.5 rounded-3xl`}></div>
            </div>
            <small>dark</small>
        </div>
    )
}

export default ToggleDarkMode