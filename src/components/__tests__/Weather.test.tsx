import axios from 'axios';
import { fetchWeatherData } from '../../__mocks__/WeatherMocks';
import { render, waitFor } from '@testing-library/react';
import Weather from '../Weather';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('mock api calls', () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValue({
      data: {
        result: {
          weather: {
            forcast: 'Sunny',
            max: 28,
            min: 17,
            description: 'Clear skys all day with a warm summber breaze ariving in the afternoon',
          },
        },
      },
    });
  });

  test('should return description', async () => {
    const { getByText, getByTestId } = render(<Weather />);
    await waitFor(() => {
      fetchWeatherData();
      expect(
        getByText('Clear skys all day with a warm summber breaze ariving in the afternoon'),
      ).toBeInTheDocument();

      expect(getByText(`Temp: 17 to 28`));
      expect(getByTestId('sunny')).toBeTruthy();
    });
  });
  test('should return forcast', async () => {
    const { getByText } = render(<Weather />);
    await waitFor(() => {
      fetchWeatherData();

      expect(getByText('Sunny')).toBeInTheDocument();
    });
  });

  test('should return temp', async () => {
    const { getByText } = render(<Weather />);
    await waitFor(() => {
      fetchWeatherData();

      expect(getByText(`Temp: 17 to 28`));
    });
  });

  test('should return sunny icon', async () => {
    const { getByTestId } = render(<Weather />);
    await waitFor(() => {
      fetchWeatherData();

      expect(getByTestId('sunny')).toBeTruthy();
    });
  });
});
