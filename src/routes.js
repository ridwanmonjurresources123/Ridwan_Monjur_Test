import { Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import ProductCart from "./pages/customer/product-cart";
import ProductDescription from "./pages/customer/product-description";
import ProductListing from "./pages/customer/product-listing";

function RoutesApp() {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Navigate to='category/men' />} />
                <Route path="category" element={<ProductListing />} />
                <Route path="category/:category" element={<ProductListing />} />
                {/* <Route path="description" element={<ProductDescription />}/> */}
                <Route path="cart" element={<ProductCart />} />
                {/* <Route path="*" element={<ProductListing />}/> */}
            </Route>
        </Routes>
    );
}

export default RoutesApp

