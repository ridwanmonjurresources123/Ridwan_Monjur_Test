import { Routes, Route, Navigate } from "react-router-dom"
import CartPage from "./pages/customer/cart"
import DescriptionPage from "./pages/customer/description"
import ListingPage from "./pages/customer/listing"

function RoutesApp() {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Navigate to='category/tech' />} />
                <Route path="category" element={<ListingPage />} />
                <Route path="category/:category" element={<ListingPage />} />
                <Route path="product/:productId" element={<DescriptionPage />}/>
                <Route path="cart" element={<CartPage />} />
                {/* <Route path="*" element={<ListingPage />}/> */}
            </Route>
        </Routes>
    )
}

export default RoutesApp

