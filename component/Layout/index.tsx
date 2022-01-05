import HeaderBar from "./HeaderBar"

const Layout: React.FC = ( {children} ) => {
    return (
        <div className="layout">
            <HeaderBar />
            <div className="content">
                {children}
            </div>
        </div>
    )
}

export default Layout