// module
import { FC } from "react";

interface ContentProps {
    children: React.ReactNode
}

const Content: FC<ContentProps> = ({ children }) => {
    return (
        <div className="protected-layout-content">
            {children}
        </div>
    )
}

export default Content