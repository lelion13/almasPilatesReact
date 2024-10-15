import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function Page ({children}){
    return (
        <>
        <body style={{ position: "relative", minHeight: "90vh" }}>
            <Header />
                {children}
            <Footer />   
        </body>
        </>
    );
}

export default Page;