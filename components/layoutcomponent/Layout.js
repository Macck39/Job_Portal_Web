import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components"
import Head from "next/head"


export default function Layout({ children }) {
    return (
        <>
            <Head>
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    )
}