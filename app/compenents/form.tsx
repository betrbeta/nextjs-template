// Form.tsx
import React, { useState } from 'react';
import { Formik, Form as FormikForm } from 'formik';
import ValidationUI from './ValidationUI';
import { existingStrings, sports } from './existingStrings';

const Form: React.FC = () => {
  const [isStringsMatch, setStringsMatch] = useState(false);
  const [matchedCountry, setMatchedCountry] = useState('');
  const [matchedSport, setMatchedSport] = useState('');

  const handleSubmit = (values: any) => {
    const userInput = values.countryField;
    const checkInput = existingStrings.includes(userInput);
    setMatchedCountry(existingStrings.find(country => country === userInput) || '');
    checkInput ? setStringsMatch(true) : setStringsMatch(false);

    const userSportInput = values.sportField;
    const checkSportInput = sports.includes(userSportInput);
    setMatchedSport(sports.find(sport => sport === userSportInput) || '');
    checkSportInput ? setStringsMatch(true) : setStringsMatch(false);
  };

  const [focusedField, setFocusedField] = useState('');

  const handleFocusChange = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  return (
    <Formik initialValues={{ countryField: '', sportField: '' }} onSubmit={handleSubmit}>
      {() => (
        <FormikForm className="space-y-4">
          <ValidationUI selectedString={matchedCountry} existingStrings={existingStrings} isStringsMatch={isStringsMatch} fieldName="countryField" focusedFieldName={focusedField} onFocusChange={handleFocusChange} />
          <ValidationUI selectedString={matchedSport} existingStrings={sports} isStringsMatch={isStringsMatch} fieldName="sportField" focusedFieldName={focusedField} onFocusChange={handleFocusChange} />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
