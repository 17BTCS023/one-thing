import { PageHeaderProps } from "@/types/interfaces/PageHeaderProps";

function PageHeader( {title,subtitle} : PageHeaderProps ) {
    return <>
            <h1>Yo yo yo {title}</h1>
            {subtitle ? <p>{subtitle}</p>: null }
    </>
}

export default PageHeader;