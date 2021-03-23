import Link from 'next/link'
import { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'


export default function layout(props) {
    const [menu, setMenu] = useState(false)

    return (
        <>
            <nav className={menu ? "active" : ""}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/portfolio">Portfolio</Link>
            </nav>

            <div className={menu ? "active main" : "main"} >

            <aside>
                <div className="menu-button-container" onClick={() => setMenu(!menu)}>
                    <div className="menu-line"></div>
                    <div className="menu-line bottom"></div>
                </div>

                
                <div className="social">

                    <img src="/instagram.svg"></img>
                    <img src="/codewars.svg"></img>
                    <img src="/linkedin.svg"></img>
                </div>
                
            </aside>
            <AnimatePresence exitBeforeEnter >

            <motion.div className="Body" initial={{opacity:0, x: 50}} animate={{opacity:1, x: 0}} exit={{x: 200}}>
                {props.children}
            </motion.div>
            </AnimatePresence>
            </div>
            
        </>
    )
}
