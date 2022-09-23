import '../styles/tailwind.css'
import '../styles/globals.css'

// import '/assets/css/bootstrap.min.css'
// import '/assets/css/meanmenu.css'
// import '/assets/css/icofont.css'
// import '/assets/css/owl.carousel.min.css'
// import '/assets/css/owl.theme.default.min.css'
// import '/assets/css/animate.min.css'
// import '/assets/css/odometer.min.css'
// import '/assets/css/style.css'
// import '/assets/css/responsive.css'
// import '/assets/css/theme-dark.css'



import Layout from "../components/layoutcomponent/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <main className='props'>
    <Component {...pageProps} />
    </main>
    </Layout>)
}

export default MyApp







