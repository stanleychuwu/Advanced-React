import { useState } from 'react';

export default function useForm(initial = {}) {
  // create a state object for our fields
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  return {
    inputs,
    handleChange,
  };
}
