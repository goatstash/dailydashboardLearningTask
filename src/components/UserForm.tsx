import React from 'react';
import { Container, Title, TextInput } from '@mantine/core';
import { useStateWithLocalStorage } from './UseStateWithLocalStorage';

const UserForm = () => {
  const [inputValue, setInputValue] = useStateWithLocalStorage('', 'form');
  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setInputValue(() => ({
      [event.target.name]: event.target.value,
    }));
  }
  return (
    <Container>
      <Title order={2}>Welcome {inputValue.name ? inputValue.name : ''}</Title>

      <TextInput
        type="text"
        name="name"
        id="name"
        placeholder="enter your name"
        onChange={handleChange}
        value={inputValue.name}
      />
    </Container>
  );
};

export default UserForm;
