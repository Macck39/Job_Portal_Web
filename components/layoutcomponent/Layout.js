import Header from "./Header"
import Footer from "./Footer"



export default function Layout({children}){
    return (
        <main>
        <Header />
        <div className="">
        {children}
        </div>
        <Footer/>
        </main>
    )
}