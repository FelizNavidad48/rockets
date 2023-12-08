import DropdownField from './DropdownField';
import './index.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [options, setOptions] = useState<string[]>([]);

  type DictType = {
    [key: string]: string;
  };

  const namesAndUrls: DictType = {
    "Falcon 9" : "falcon_9",
    "Falcon Heavy" : "falcon_heavy",
  };

  const namesAndCountries: DictType = {
    "Falcon 9" : "usa",
    "Falcon Heavy" : "usa",
  };



  useEffect(() => {

    const rockets = Object.keys(namesAndUrls);

    // Filter options based on the input value
    const filteredOptions = rockets.filter(option =>
      (option.toLowerCase().includes(inputValue.toLowerCase()) && inputValue !== '')
    );

    setOptions(filteredOptions);
  }, [inputValue]);

  const handleInputChange = (e : any) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='font-rb bg-image bg-cover h-screen flex flex-col items-center'>
      <div className=' absolute top-100'>
        <input placeholder="" onChange={handleInputChange} className=' placeholder-white font-medium border-4
        caret-transparent text-5xl bg-black px-2 text-white h-28 w-250'></input>
          <ul className='text-white font-medium text-3xl'>
            {options.map((option, index) => (
              <DropdownField name={option} url={namesAndUrls[option]} id={"dropdown_"+String(index)} country={namesAndCountries[option]}/>
            ))}
          </ul>
      </div>
      
    </div>
  );
}

export default App;
