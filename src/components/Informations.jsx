export function Informations({title = 'N/A', informations = []}) {
    return (
        <div className="last:odd:col-span-full lg:last:odd:col-span-1">
            <h6 className="text-lg text-white font-semibold capitalize mb-2.5 md:mb-5 lg:mb-7">{title}</h6>
            <div className="space-y-2 md:space-y-3">
                {informations.map(
                    (info, index) => 
                        <a 
                            key={index} 
                            href={info.link} 
                            className="block text-white font-normal capitalize hover:underline"
                        >
                            {info.text}
                        </a>
                )}
            </div>
        </div>
    )
}