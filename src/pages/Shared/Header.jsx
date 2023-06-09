import React, { useContext, useState } from 'react';
import { XMarkIcon, Bars3Icon, ArrowLeftOnRectangleIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
    const [open, setOpen] = useState(false)
    const { user, logOut } = useContext(AuthContext)
    const [showName, setShowName] = useState(false)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }
    const handleName = () => {
        setShowName(true)
    }
    const removeName = () => {
        setShowName(false)
    }
    return (
        <nav>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>
                    {
                        open === true ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />
                    }
                </span>



            </div>

            <div className='md:flex items-center justify-between'>
                <div className='flex gap-2 items-center justify-center'>
                    <img src="/logo.png" className='w-16' alt="" />
                    <h1 className='h-12 text-4xl font-bold animate-text bg-gradient-to-r from-[#00d026] via-[#FFEC01] to-[#78460D] bg-clip-text text-transparent'>Woodland Toys</h1>
                </div>
                <div className='md:flex items-center gap-8'>
                    <div className='max-sm:absolute max-sm:top-0 max-sm:right-0 flex items-center gap-5'>
                        {
                            user && <div className='md:flex items-center gap-5'>
                            { showName && <p className='text-xl font-semibold text-green-600 max-sm:ml-5 max-sm:mt-3'>{user.displayName}</p>}
                            <img onMouseOver={handleName} onMouseLeave={removeName} className=' max-sm:ml-5 max-sm:my-5 w-12 rounded-full' src={user.photoURL} alt="" />
                        </div>
                        }
                        {
                            user ? <button onClick={handleLogOut} className='flex gap-2 max-sm:mr-5 text-[#108826] font-semibold'><ArrowLeftOnRectangleIcon className="h-6 w-6 " />Log Out</button> : <Link to='/login'><button className='flex gap-2 text-[#108826] max-sm:mr-5 max-sm:mt-5 font-semibold'><ArrowRightOnRectangleIcon className="h-6 w-6" />Login</button></Link>
                        }
                    </div>
                    <ul className={`md:flex max-sm:bg-[#108826] max-sm:text-white gap-8 text-[#108826] font-semibold absolute md:static 0 max-sm:pl-8 py-2 duration-500 ${open ? 'top-6' : '-top-80'}`}>
                        <Link to='/'><li className='max-sm:p-3'>Home</li></Link>
                        <Link to='/alltoys'><li className='max-sm:p-3'>All Toys</li></Link>
                        {
                            user && <>
                                <Link to='/mytoys'><li className='max-sm:p-3'>My Toys</li></Link>
                                <Link to='/addtoys'><li className='max-sm:p-3'>Add a Toy</li></Link>
                            </>
                        }
                        <Link to='/blog'><li className='max-sm:p-3'>Blog</li></Link>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Header;