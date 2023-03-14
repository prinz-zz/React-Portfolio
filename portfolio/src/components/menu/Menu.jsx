import './menu.scss';

export default function Menu({ menuOpen, setMenuOpen }) {
    
    const menu = ['Intro', 'Portfolio', 'Works', 'Testimonials', 'Contact'];
    return (
        <div className={"menu " + (menuOpen && 'active')}>
            <ul>
                {menu.map((item) => (<li onClick={() => setMenuOpen(false)} key={item}><a href={`#${item}`}>{item}</a></li>))}
                
                {/* <li onClick={()=>setMenuOpen(false)}><a href="#portfolio">Portfolio</a></li>
                <li onClick={()=>setMenuOpen(false)}><a href="#works">Works</a></li>
                <li onClick={()=>setMenuOpen(false)}><a href="#testimonials">Testimonials</a></li>
                <li onClick={()=>setMenuOpen(false)}><a href="#contact">Contact</a></li> */}
            </ul>    
        </div>
    )
}