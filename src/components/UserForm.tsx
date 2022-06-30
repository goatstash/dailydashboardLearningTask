import React from 'react';
import { Container, Title } from '@mantine/core';
import useStateWithLocalStorage from './UseStateWithLocalStorage';

const UserForm = () => {
  const [inputValue, setInputValue] = useStateWithLocalStorage('', 'form');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setInputValue(() => ({
      [event.target.name]: event.target.value,
    }));
  }
  return (
    <Container>
      <Title order={2}>Welcome {inputValue.name ? inputValue.name : ''}</Title>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            id="name"
            placeholder="enter your name"
            onChange={handleChange}
            value={inputValue.name}
          />
        </label>
      </form>
    </Container>
  );
};

export default UserForm;
