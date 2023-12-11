import './Navbar.css'
const Navbar = () => {

    // const ulDesgin = {
    //             display:'flex',
    //             gap:'20px',
    //             listStyle:'none'
    // }

  return (
    <>
    <header className="header">
        <nav>
            <a 
            id='logo'
            // style={{color:'#0e0040',textDecoration:'none',fontWeight:'bold'}} 
            href="">Todo App </a>

            <ul 
            // style={ulDesgin}
            >
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
            </ul>
        </nav>
    </header>

    </>
  )
}

export default Navbar
