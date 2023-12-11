import { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { PiShoppingCartDuotone } from "react-icons/pi";
import { LuShoppingCart } from "react-icons/lu";
import Sidebar from './Sidebar/Sidebar';
import { useSelector } from 'react-redux';
const Navbar = () => {

    const data  = useSelector((state)=>state.product.cart)

  return (
    <>
    <Toaster/>
            <header className="py-4 shadow">
                    <nav className=' w-full md:w-[90%] mx-auto flex justify-between items-center'>
                    <Link to={'/'} className='font-bold text-xl flex gap-3 items-center'> <PiShoppingCartDuotone/> Shopify</Link>
                        <ul className='flex space-x-5 items-center'>
                            <li>
                                <Link to={'/'}> Home</Link>
                            </li>
                            <li>
                                <Link to={'/about'}> About</Link>
                            </li>
                            <li>
                                <Link to={'/contact'}> Contact</Link>
                            </li>
                            <li>
                                <Link to={'/cart'}> 
                                            <div className="relative">
                                            <LuShoppingCart className='' size={30} />
                                            <span className='absolute -top-2 -right-4 bg-red-500 text-white px-2 rounded-full'>{data && data.length}</span>
                                            </div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
            </header>

                <Sidebar/>

    </>
  )
}

export default Navbar