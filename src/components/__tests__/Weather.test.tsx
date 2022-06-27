import axios from 'axios';
import { fetchWeatherData } from '../../__mocks__/WeatherMocks';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('mock api calls', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('return forcast Sunny', async () => {
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
    const mockedData = await fetchWeatherData();
    expect(mockedData.forcast).toEqual('Sunny');
    expect(mockedData.max).toEqual(28);
    expect(mockedData.min).toEqual(17);
    expect(mockedData.description).toEqual(
      'Clear skys all day with a warm summber breaze ariving in the afternoon',
    );
  });
});
