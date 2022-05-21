import React from 'react';

import Select from 'react-select';
// import makeAnimated from 'react-select/animated';

const options = [
    { value: 'KOTA', label: 'KOTA' },
    { value: 'BUNDI', label: 'BUNDI' },
    { value: 'JHALAWAR', label: 'JHALAWAR' }
  ]
// const animatedComponents = makeAnimated();

export default function MultiSelection() {
  return (
    <Select
   
 placeholder="Select City"

      closeMenuOnSelect={false}
    //   components={animatedComponents}
    //   defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={options}
    />
  );
}