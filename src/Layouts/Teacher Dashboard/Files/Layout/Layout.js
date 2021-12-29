import Sidebar from '../Views/Sidebar'

export default function Layout(props) {
    const { children } = props
    return (
        <div>
            <Sidebar />
            {children}
        </div>
    )
}