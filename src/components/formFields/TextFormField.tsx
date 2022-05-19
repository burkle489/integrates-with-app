import { FieldProps, useField } from 'formik';
import React from 'react';

export const TextFormField: React.FC<any & FieldProps> = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
    return (
        <div className='FormField'>
            <label className={`FormLabel${!label ? ' RemoveMargin' : ''}`}>
                {label}
            </label>
            <input {...field} {...props} type='text' className='FormInput' />
            {meta.touched && meta.error ? (
                <div className="FormError">{meta.error}</div>
            ) : null}
        </div>
    )
}
