import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from '@mantine/core';

const NewsComponent = () => {
  const [news, setNews] = useState([]);

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
      {/* {news.map((story, key) => (
        <h3 key={key}>{story}</h3>
      ))} */}
    </Container>
  );
};

export default NewsComponent;
