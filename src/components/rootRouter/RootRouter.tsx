import { Route, Routes } from "react-router-dom"
import { Home } from "../../pages/home/Home"
import { Mission } from "../../pages/mission/Mission"
import { News } from "../../pages/news/News"

export const RootRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/news' element={<News />} />
            <Route path='/mission' element={<Mission />} />
        </Routes>
    )
}