import '../styles/tailwind.css'
// import '../styles/bootstrap.min.css'
// import '../styles/meanmenu.css'
// import '../styles/icofont.css'
// import '../styles/owl.carousel.min.css'
// import '../styles/owl.theme.default.min.css'
// import '../styles/animate.min.css'
// import '../styles/odometer.min.css'
// import '../styles/style.css'
// import '../styles/responsive.css'
// import '../styles/theme-dark.css'



import Layout from "../components/layoutcomponent/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <main className='container'>
    <Component {...pageProps} />
    </main>
    </Layout>)
}

export default MyApp







// import Layout from '../components/LayoutComponent/Layout'