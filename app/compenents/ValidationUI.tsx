// ValidationUI.tsx
import React, { useState, useEffect } from 'react';
import { Field, useFormikContext } from 'formik';

interface ValidationUIProps {
  existingStrings: string[];
  isStringsMatch: boolean;
  selectedString: string;
  fieldName: string;
  focusedFieldName: string;
  onFocusChange: (fieldName: string) => void;
}

const ValidationUI: React.FC<ValidationUIProps> = ({ selectedString, existingStrings, isStringsMatch, fieldName, focusedFieldName, onFocusChange }) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const { values, setFieldValue } = useFormikContext();
  const isInputFocused = fieldName === focusedFieldName;

  useEffect(() => {
    if (!isInputFocused) {
      setSuggestions([]); // Hide the dropdown suggestions on blur
    }
  }, [isInputFocused]);

  useEffect(() => {
    if (fieldName !== focusedFieldName) {
      setSuggestions([]); // Hide the dropdown suggestions when the other input is focused
    }
  }, [focusedFieldName, fieldName]);

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toUpperCase();
    const matchedSuggestions = existingStrings.filter(str => str.includes(inputValue));
    setSuggestions(matchedSuggestions);
    setFieldValue(fieldName, inputValue);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSuggestions([]);
    setFieldValue(fieldName, suggestion);
  };

  const matchedSuggestion = suggestions.find(
    suggestion => suggestion === values[fieldName].toUpperCase()
  );

  return (
    <div className="relative">
      <Field
        type="text"
        name={fieldName}
        placeholder="Enter text"
        onChange={handleFieldChange}
        onFocus={() => {
          onFocusChange(fieldName); // Notify the parent component about focus change
        }}
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
      {isInputFocused && suggestions.length > 0 && (
        <div className={`absolute top-8 right-2 bg-white p-1 rounded shadow-md ${fieldName === 'countryField' ? 'z-10' : ''}`}>
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
