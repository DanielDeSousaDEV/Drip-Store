import { Button } from "./Button";

export function ProductOptions({options, radius, selected, shape='square', type='text'}) {

    const selectedClasses = type === 'text' 
        ? '!bg-primary text-white border-primary hover:!bg-primary/90 hover:border-primary/90'
        : 'border-primary'

    const aditionalClasses = selected ? selectedClasses : ''

    


    return (
        <>
            {options.map((value, index) => (
                <div key={index}>
                    {type === 'text' 
                        ? 
                            (
                                <Button 
                                    size='icon' 
                                    rounded={shape === 'square' ? '' : 'full'} 
                                    variant='productOptions' 
                                    className={aditionalClasses} 
                                    style={{borderRadius: shape == 'square' ? radius : 'auto'}} 
                                >
                                    {value}
                                </Button>
                            )
                            : 
                            (
                                <Button 
                                    size='icon' 
                                    rounded={shape === 'square' ? '' : 'full'} 
                                    variant='productOptions' 
                                    className={`overflow-hidden !p-1 border-transparent ${aditionalClasses}`} 
                                    style={{borderRadius: shape == 'square' ? radius : '1000px'}} 
                                >
                                    <div className="min-w-8 min-h-8 rounded-sm" style={{backgroundColor: value, borderRadius: shape == 'square' ? radius : '1000px'}}></div>
                                </Button>
                            )
                    }               
                </div>
            ))}
        </>
    )
}