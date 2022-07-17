import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script"

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/icon.ico" />
          
          <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" href="/assets/css/meanmenu.css" />

          <link rel="stylesheet" href="/assets/css/icofont.min.css" />

          <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
          <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css" />

          <link rel="stylesheet" href="/assets/css/animate.min.css" />

          <link rel="stylesheet" href="/assets/fonts/flaticon.css" />

          <link rel="stylesheet" href="/assets/css/odometer.min.css" />
          <link rel="stylesheet" href="/assets/css/style.css" />

          <link rel="stylesheet" href="/assets/css/responsive.css" />

          <link rel="stylesheet" href="/assets/css/theme-dark.css" />

        </Head>
        <body>
          <Main />
          <NextScript />

          <Script src="/assets/js/jquery.min.js" />
          <Script src="/assets/js/bootstrap.bundle.min.js" />

          <Script src="/assets/js/jquery.meanmenu.js" />

          <Script src="/assets/js/jquery.mixitup.min.js" />

          <Script src="/assets/js/owl.carousel.min.js" />

          <Script src="/assets/js/jquery.ajaxchimp.min.js" />

          <Script src="/assets/js/form-validator.min.js" />

          <Script src="/assets/js/contact-form-script.js" />

          <Script src="/assets/js/wow.min.js" />

          <Script src="/assets/js/odometer.min.js" />
          <Script src="/assets/js/jquery.appear.min.js" />

          <Script src="/assets/js/custom.js" />
        </body>
      </Html>
    )
  }
}



