import axios from 'axios';
import { render, waitFor, screen } from '@testing-library/react';
import WeatherComponent from '../WeatherComponent';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Return Weather Component Data', () => {
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
    screen.debug();
    const { getByText } = render(<WeatherComponent />);
    await waitFor(() => {
      expect(
        getByText('Clear skys all day with a warm summber breaze ariving in the afternoon'),
      ).toBeInTheDocument();
    });
  });
  test('should return forcast', async () => {
    const { getByText } = render(<WeatherComponent />);
    await waitFor(() => {
      expect(getByText(/sunny/i)).toBeInTheDocument();
    });
  });

  test('should return temp', async () => {
    const { getByText } = render(<WeatherComponent />);
    await waitFor(() => {
      expect(getByText(/Sunny with a low of 17 and a high of 28/i)).toBeInTheDocument();
    });
  });
});

describe('Return weather icons', () => {
  test('should return `sunny` icon', async () => {
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
    const { getByTestId } = render(<WeatherComponent />);

    await waitFor(() => {
      expect(getByTestId('sunny')).toBeTruthy();
    });
  });
  test('should return `snowing` icon', async () => {
    mockedAxios.get.mockResolvedValue({
      data: {
        result: {
          weather: {
            forcast: 'Snowing',
            max: 28,
            min: 17,
            description: 'Clear skys all day with a warm summber breaze ariving in the afternoon',
          },
        },
      },
    });
    const { getByTestId } = render(<WeatherComponent />);

    await waitFor(() => {
      expect(getByTestId('snowing')).toBeTruthy();
    });
  });
  test('should return `overcast` icon', async () => {
    mockedAxios.get.mockResolvedValue({
      data: {
        result: {
          weather: {
            forcast: 'Overcast',
            max: 28,
            min: 17,
            description: 'Clear skys all day with a warm summber breaze ariving in the afternoon',
          },
        },
      },
    });
    const { getByTestId } = render(<WeatherComponent />);

    await waitFor(() => {
      expect(getByTestId('overcast')).toBeTruthy();
    });
  });
});
