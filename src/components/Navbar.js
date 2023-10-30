import './Navbar.css';

 

function Navbar(){
    return(

        <>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
        <section className="navbar-section">
            <div className="home">
                
                <a className = "home-link" href="/home"><h1>Home Button</h1></a>
            </div>
            <div className="pages">
                
                <ul className="menu">
                    <li className="page-link" ><a className="page-text" href="/contact">Contact</a></li>
                    <li className="page-link" ><a className="page-text" href="/projects">Projects</a></li>
                    <li className="page-link" ><a className="page-text" href="/about">About</a></li>
                </ul>
            </div>
        </section>
        </>
    )
}

export default Navbar;
