import { FieldProps, useField } from 'formik'
import Select from 'react-select'
import { ChangeMe } from '../../App'

export const DropdownFormField: React.FC<ChangeMe & FieldProps> = ({
    id,
    label,
    onChange,
    ...props
  }) => {
    const [field, meta, helpers] = useField(props);
      const handleOnChange = (selectedOption: ChangeMe) => {
        helpers.setValue(selectedOption)
      }
      const handleOnBlur = () => {
        helpers.setTouched(true)
      }

      const hasError = meta.touched && meta.error;
      
      return(
        <div className='FormField'>
        <label className='FormLabel'>
            {label}
        </label>
        <Select
        {...field}
        {...props}
        className='react-select'
        onChange={onChange ? onChange : handleOnChange}
        onBlur={handleOnBlur}
    />
        {hasError ? (
            <div className="FormError">{meta.error}</div>
        ) : null}
    </div>
   
  )
      }