import React from 'react'

const Header = () => {
  return (
    <>
        <header className='py-2 px-[30px]'>
            <nav className="flex justify-between items-center">
                <div className="flex justify-between items-center">
                    <div className="">
                        <NavLink to="/" className="">
                            <img className="w-[130px] pt-[16px] pb-5" src="https://i.imgur.com/rKpDjIQ.png" alt="" /></NavLink>
                    </div>
                    <Menu />
                </div>
                
                <div className="flex justify-between items-center">
                    <SearchForm />
                    <ActionAuth />
                </div>
            </nav>
        </header>
    </>
  )
}