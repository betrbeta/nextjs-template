import React from 'react';
import  {useState} from 'react';
import { Formik, Form as FormikForm } from 'formik';
import ValidationUI from './ValidationUI';
import existingStrings from './existingStrings';

const Form: React.FC = () => {

  const [isStringsMatch, SetStringsMatch] = useState(false)
  const [matched, setMatched] = useState('')


  const handleSubmit = (values: any) => {
    const userInput = values.textField
    const chechInput = existingStrings.includes(userInput)
    setMatched(existingStrings.find(country => country === userInput) || '')
    chechInput ? SetStringsMatch(true) : SetStringsMatch(true)
  };

  return (
    <Formik initialValues={{ textField: '' }} onSubmit={handleSubmit}>
      {() => (
        <FormikForm className="space-y-4">
          <ValidationUI selectedString={matched} existingStrings={existingStrings} isStringsMatch = {isStringsMatch}/>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
