import React from 'react';
// Style
import './style.formInput.css';

type FormInputT = {
  label?: string;
  type?: 'text' | 'number';
  autoFocus?: boolean;
  value?: string | number;
  changerValue?: (value: any) => void;
};

const FormInput = ({ label = 'Label', type = 'text', autoFocus = false, value, changerValue }: FormInputT) => {
  
  // Action
  const onChanger = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueInput = e.target.value;

    if(changerValue) {
      if(type === 'number') {
        let inputNumber =  valueInput && parseInt(valueInput);

        return changerValue(inputNumber);
      };

      return changerValue(valueInput);
    };
  };

  return (
    <div className='formInputContainer dFlex'>
      <label htmlFor='' className='labelText'> {label} </label>
      <input 
        type={type}
        className='input'
        autoFocus={autoFocus}
        value={value}
        onChange={onChanger}
      />
    </div>
  );
}

export default FormInput;