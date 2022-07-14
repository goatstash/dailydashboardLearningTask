import React, { useState, useContext } from 'react';
import { Container, Title, TextInput, Button, Group, Header, createStyles } from '@mantine/core';
import { useStateWithLocalStorage } from './UseStateWithLocalStorage';
import { WeatherContext } from './WeatherComponent';
import { MdWbSunny } from 'react-icons/md';
import { BsFillCloudSnowFill } from 'react-icons/bs';
import { IoIosPartlySunny } from 'react-icons/io';

const useStyles = createStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'gray',
    justifyContent: 'space-between',
    color: 'white',
    alignItems: 'center',
    padding: '10px',
    fontSize: '25px',
    fontWeight: 'bold',
    boxShadow: '0 3px 6px 0 #555',
  },
}));

const UserForm = () => {
  const [inputValue, setInputValue] = useStateWithLocalStorage('', 'form');
  const [show, setShow] = useState(true);
  const { classes } = useStyles();
  const weatherIcon = useContext(WeatherContext);
  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setInputValue(() => ({
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <Header height={56} mb={20}>
      <Container className={classes.container}>
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

        <Group style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Title order={2}>
            {weatherIcon === 'Sunny' ? (
              <MdWbSunny data-testid="sunny" />
            ) : weatherIcon === 'Snowing' ? (
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
