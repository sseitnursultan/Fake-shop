import './App.css';
import store from "./redux/store";
import Header from './containers/Header'
import {BrowserRouter ,Route,Routes} from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

function App() {
    return (
        <BrowserRouter>
            <div className={'App'}>
                <Header/>
                <Routes>
                    <Route path={'/'} element={<ProductListing/>}/>
                    <Route path={'/product/:productId'} element={<ProductDetail/>}/>
                    <Route>404 NOT FOUND!</Route>
                </Routes>

            </div>
        </BrowserRouter>
    );
}

export default App;
