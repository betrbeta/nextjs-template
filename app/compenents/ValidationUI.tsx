import React, { useState } from 'react';
import { Field, useFormikContext } from 'formik';

interface ValidationUIProps {
  existingStrings: string[];
  isStringsMatch: boolean;
  selectedString: string;
}

const ValidationUI: React.FC<ValidationUIProps> = ({selectedString, existingStrings, isStringsMatch}) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const { values, setFieldValue } = useFormikContext();

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toUpperCase();
    const matchedSuggestions = existingStrings.filter(str => str.includes(inputValue));
    setSuggestions(matchedSuggestions);
    setFieldValue('textField', inputValue);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSuggestions([]);
    setFieldValue('textField', suggestion);
  };

  const matchedSuggestion = suggestions.find(
    suggestion => suggestion === values.textField.toUpperCase()
  );


  return (
    <div className="relative">
      <Field
        type="text"
        name="textField"
        placeholder="Enter text"
        onChange={handleFieldChange}
        className={`border p-2 rounded ${
          isStringsMatch ? 'border-red-500' : 'border-gray-300'
        }`}
        required
        autoComplete="off"
      />
      {isStringsMatch && (
        <span className="text-red-500 mt-1 block">
          It looks like you meant to enter this: {selectedString}
        </span>
      )}
      {suggestions.length > 0 && (
        <div className="absolute top-8 right-2 bg-white p-1 rounded shadow-md">
          <ul className="p-2">
            {suggestions.map((str, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(str)}
                className="cursor-pointer p-1 hover:bg-gray-100 rounded"
              >
                {str}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ValidationUI;
