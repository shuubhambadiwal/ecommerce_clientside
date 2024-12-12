import { Input } from '../ui/input';

const types = {
    INPUT : 'input',
    SELECT : 'select'
}

function CommnForm(formControls) {

    function  renderInputByComponentType(getcontrolItem) {
        let element = null;
        switch (getControlItem.componentType) {

            case "input" : 
                element = (<Input
                name={getControlItem.name}
                placeholder={getcontrolItem.placeholder}
                id= {getcontrolItem.name}
                type={getcontrolItem.type}
                /> );
            break;

            case "select" : 
                element = (
                    <Select>
                        <SelectTrigger>
                            
                        </SelectTrigger>
                    </Select>
                );
            break;

            case "textarea" : 
                element = (<Input
                name={getControlItem.name}
                placeholder={getcontrolItem.placeholder}
                id= {getcontrolItem.name}
                type={getcontrolItem.type}
                /> );
            break;

            default: 
            element = (
            <Input
                name={getControlItem.name}
                placeholder={getcontrolItem.placeholder}
                id= {getcontrolItem.name}
                type={getcontrolItem.type}
            />);
            break;
        }
        return element 
    }

  return (
    <form>
        <div className='flex flex-col gap-3'>
            {
                formControls.map(controlItem=> <div className='grid w-full gap-1.5' key={controlItem.name}>
                    <Label className="mb-1">{controlItem.label}</Label>{
                        renderInputByComponentType(controlItem)
                    }
                </div>)
            }
        </div>
    </form>
  )
}

export default CommnForm