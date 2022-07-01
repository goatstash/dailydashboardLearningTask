import { useState } from 'react';
import { Container, Title, TextInput } from '@mantine/core';

const TodoList = () => {
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    // eslint-disable-next-line no-empty
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData('');
    }
  };
  return <Container>TodoList</Container>;
};

export default TodoList;
