export function Section({link, titleAlign='left', className, children}) {
    return (
        <div className={ className ?? ''}>
            <p className="mb-5" style={{textAlign: titleAlign}}>
                <a href={link.href} className="text-dark-gray-2 text-2xl font-semibold capitalize">{link.title}</a>
            </p>
            {children}
        </div>
    )
}