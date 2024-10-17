import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import "../public/css/index.css";
function Page ({children}){
    return (
        <body>
            <Header />
                {children}
            <Footer />   
        </body>
    );
}

export default Page;