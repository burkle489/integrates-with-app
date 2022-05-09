import { Route, Routes } from "react-router-dom"
import { Home } from "../../pages/home/Home"
import { Mission } from "../../pages/mission/Mission"
import { ProductCompare } from "../../pages/productCompare/ProductCompare"

export const RootRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product-compare' element={<ProductCompare />} />
            <Route path='/mission' element={<Mission />} />
        </Routes>
    )
}