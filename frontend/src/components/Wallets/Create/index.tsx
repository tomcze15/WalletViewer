import axios from 'axios';
import React, { useState } from 'react';

import { CreateScreen } from './CreateScreen';

const Create = () => {
  const initialValues = { title: '', balance: 0 };
  const [formValues, setFormValues] = useState(initialValues);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const URL = 'http://localhost:8001/wallets/create';
    const params = {
      title: formValues.title,
      balance: formValues.balance,
    };

    const headers = {
      headers: {
        'Content-Type':
          'application/json' /*'application/x-www-form-urlencoded'*/,
      },
    };
    //
    // TODO: It should be a separate function
    //
    axios
      .post(URL, params, headers)
      .then((res) => console.log('Wallet Created', res))
      .catch((err) => {
        console.error(err);
      });
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, title: e.target.value });
  };

  const handleChangeInitialBalance = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {};

  return (
    <CreateScreen
      handleFormSubmit={handleSubmit}
      handleChangeTitle={handleChangeTitle}
      handleChangeInitialBalance={handleChangeInitialBalance}
    />
  );
};

export default Create;
