import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

const types = {
    INPUT : 'input',
    SELECT : 'select'
}

function CommnForm(formControls, formData, setFormData, onSubmit, buttonText) {
 
    function  renderInputByComponentType(getcontrolItem) {
        let element = null;
        const value = formData[getControlItem.name] || ''

        switch (getControlItem.componentType) {
            case "input" : 
                element = (<Input
                name={getControlItem.name}
                placeholder={getcontrolItem.placeholder}
                id= {getcontrolItem.name}
                type={getcontrolItem.type}
                value={value}
                onChnage={event> setFormData({
                     ...formData,
                [getcontrolItem.name] : event.target.value,
                })}
                /> );
            break;

            case "select" : 
                element = (
                    <Select OnValueChnage={(value)=> setFormData({ 
                         ...formData,
                         [getControlItem.name]: value,
                    })} value={value}>
                        <SelectTrigger className="w-full">
                           <SelectValue placeholder={getControlItem.placeholder}/>
                        </SelectTrigger>
                        <SelectContent>
                            {
                                getControlItem.options && 
                                getControlItem.options.length > 0 ?
                                getControlItem.options.map(optionItem=>
                                <SelectItem key={optionItem.id} value={optionItem.id}>{optionItem.label}  
                                </SelectItem>) : null
                            }
                        </SelectContent>
                    </Select>
                );
            break;

            case "textarea" : 
                element = (<Textarea
                name={getControlItem.name}
                placeholder={getcontrolItem.placeholder}
                id= {getcontrolItem.id}
                type={getcontrolItem.type}
                value={value}
                /> );
            break;

            default: 
            element = (
            <Input
                name={getControlItem.name}
                placeholder={getcontrolItem.placeholder}
                id= {getcontrolItem.name}
                type={getcontrolItem.type}
                value={value}
                onChnage={event> setFormData({
                     ...formData,
                [getcontrolItem.name] : event.target.value,
                })}
            />);
            break;
        }
        return element 
    }

  return (
    <form onSubmit={onSubmit}>
        <div className='flex flex-col gap-3'>
            {
                formControls.map(controlItem=> <div className='grid w-full gap-1.5' key={controlItem.name}>
                    <Label className="mb-1">{controlItem.label}</Label>{
                        renderInputByComponentType(controlItem)
                    }
                </div>)
            }
        </div>
        <Button type='submit' className='mt-2 w-full'>{buttonText || 'Submit'}</Button>
    </form>
  )
}

export default CommnForm