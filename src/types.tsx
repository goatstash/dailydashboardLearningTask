export type Weather = {
  forcast: string;
  max: number;
  min: number;
  description: string;
};

export type FormInput = {
  name: string;
};

export type Tasks = {
  taskName: string;
};
export type News = [
  {
    title?: string;
    image?: string;
    description?: string;
    datePosted?: string;
  },
];

export interface WeatherProps {
  user: Weather;
}

export type WeatherContextProviderProps = {
  children: React.ReactNode;
};

export type WeatherContextType = {
  weather?: Weather;
  setWeather: React.Dispatch<React.SetStateAction<Weather | undefined>>;
};
