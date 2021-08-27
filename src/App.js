import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Shop from "./components/Shop";
import {ContextProvider} from "./context";

function App() {
    return (
        <>
            <Header/>
            <ContextProvider>
                <Shop/>
            </ContextProvider>
            <Footer/>
        </>
    );
}

export default App;
