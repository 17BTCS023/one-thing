import { PageHeaderProps } from "@/types/interfaces/PageHeaderProps";

export function PageHeader( {title,subtitle} : PageHeaderProps ) {
    return <>
            <h1>{title}</h1>
            {subtitle ? <p>{subtitle}</p>: null }
    </>
}