import Link from 'next/link'
import Layout from '../../components/layout-en'


export default function index() {
    return (
        <Layout>
            <div className="hero">

                <h1 className="border-text">Hello <span>World!</span></h1>
                <p>Hi!. My name is <span>Jorman Garcia</span> and I am a <span>Front-end Developer</span>.</p>
               <Link href="/portfolio">See my work</Link>
            </div>
        </Layout>
    )
}
