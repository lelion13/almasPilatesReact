import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import "../public/css/index.css";
function Page ({children}){
    return (
        <>
            <Header />
                {children}
            <Footer />   
        </>
    );
}

export default Page;