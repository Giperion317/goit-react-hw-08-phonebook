import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { selectToken } from "redux/auht/auth-selector"
import { Navigation } from "components/Navigation/Navigation"
import { AuthNavigation } from "components/AuthNavigation/AuthNavigation"
import { UserAuthMenu } from "components/UserAuthMenu/UserAuthMenu"

export const Layout = () => {
    const token = useSelector(selectToken)
    return (
        <>
            <header>
                <Navigation />
                {token ? <UserAuthMenu /> : <AuthNavigation />}
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                © 2023 | Create by <a href='https://github.com/Giperion317' target="_blank" rel="noopener noreferrer">Giperion317</a>
            </footer>
        </>
    )
}