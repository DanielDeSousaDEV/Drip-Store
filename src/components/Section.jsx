import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'

export function Section({link, titleAlign='left', className, withCallToAction=false, children}) {
    return (
        <div className={ className ?? ''}>
            <p className={`mb-5 ${withCallToAction ? 'flex items-center justify-between' : ''}`}  style={{textAlign: titleAlign}}>
                <a href={link.href} className='text-dark-gray-2 text-2xl font-semibold capitalize'>{link.title}</a>
                {withCallToAction && (
                    <a href={link.href} className="flex gap-2 text-primary">
                        <p className="text-lg">Ver todos</p>
                        <ArrowRightIcon/>
                    </a>
                )}
            </p>
            {children}
        </div>
    )
}