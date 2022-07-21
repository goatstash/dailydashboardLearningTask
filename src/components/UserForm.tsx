import React, { useState, useContext } from 'react';
import { Container, Title, TextInput, Button, Group, Header } from '@mantine/core';
import { useStateWithLocalStorage } from './UseStateWithLocalStorage';
import { MdWbSunny } from 'react-icons/md';
import { BsFillCloudSnowFill } from 'react-icons/bs';
import { IoIosPartlySunny } from 'react-icons/io';
import { useStyles } from '../styles/Styles';
import { WeatherContext } from './context/WeatherContext';

const UserForm = () => {
  const [inputValue, setInputValue] = useStateWithLocalStorage('', 'form');
  const [show, setShow] = useState(true);
  const { classes } = useStyles();
  const { weather } = useContext(WeatherContext);

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setInputValue(() => ({
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <Header height={56} mb={20}>
      <Container className={classes.userFormContainer}>
        <Group>
          <Title order={2}>Welcome </Title>
          {show && (
            <TextInput
              type="text"
              name="name"
              id="name"
              placeholder="enter your name"
              onChange={handleChange}
              value={inputValue.name}
            />
          )}
          {show && <Button onClick={() => setShow((prev) => !prev)}>SAVE</Button>}
          <Title order={2}>{inputValue.name ? inputValue.name : ''}</Title>
        </Group>

        <Group>
          <Title order={2}>
            {weather?.forcast === 'Sunny' ? (
              <MdWbSunny data-testid="sunny" />
            ) : weather?.forcast === 'Snowing' ? (
              <BsFillCloudSnowFill data-testid="snowing" />
            ) : (
              <IoIosPartlySunny data-testid="overcast" />
            )}
          </Title>
        </Group>
      </Container>
    </Header>
  );
};
export default UserForm;
