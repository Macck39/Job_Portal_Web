import Header from "./Header"
import Footer from "./Footer"




export default function Layout({children}){
    return (
        <main className="layout ">
        <Header />
        <div className="child ">
        {children}
        </div>
        <Footer/>
        </main>
    )
}