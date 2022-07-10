import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Title, Text, Group } from '@mantine/core';
import { News } from '../types';
const NewsComponent = () => {
  const [news, setNews] = useState<News>();

  const fetchNewsData = async () => {
    const response = await axios.get('http://mock-api-call/news/get-news');

    setNews(response.data.result.news);
  };

  console.log(news);

  useEffect(() => {
    fetchNewsData();
  }, []);
  return (
    <Container>
      <Title order={2}>Daily News</Title>

      {news?.map((story: any, key: number) => (
        <Group key={key}>
          <Title order={4}>{story.title}</Title>
          <Text style={{ marginBottom: '15px' }}>{story.description}</Text>
        </Group>
      ))}
    </Container>
  );
};

export default NewsComponent;
