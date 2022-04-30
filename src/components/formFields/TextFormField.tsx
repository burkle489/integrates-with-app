import { useField } from 'formik';
import React from 'react'
import { ChangeMe } from '../../App';


type TextFormFieldProps = ChangeMe;

export const TextFormField: React.FC<TextFormFieldProps> = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
    return (
        <div className='FormField'>
            <label className='FormLabel'>
                {label}
            </label>
            <input {...field} {...props} type='text' className='FormInput' />
            {meta.touched && meta.error ? (
                <div className="FormError">{meta.error}</div>
            ) : null}
        </div>
    )
}
