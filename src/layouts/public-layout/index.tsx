// module
import { FC } from "react"

interface PublicLayoutProps {
    Cmp: FC
}

const PublicLayout: FC<PublicLayoutProps> = ({ Cmp }) => {
    return (
        <div className="public-layout-wrapper"><Cmp /></div>
    )
}

export default PublicLayout