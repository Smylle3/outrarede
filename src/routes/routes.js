import { Route, BrowserRouter, Routes } from 'react-router-dom'

import Login from 'pages/login'
import SignIn from 'pages/signin'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path="/" exact />
                <Route element={<SignIn />} path="/signin" />
            </Routes>
        </BrowserRouter>
    )
}
