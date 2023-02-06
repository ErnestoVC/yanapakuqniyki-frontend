import Sidebar from "./Sidebar";
import { ReactNode } from 'react'

interface Props {
    children?: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="p-7">
                {children}
            </div>
        </div>
    )
}

export default Layout;