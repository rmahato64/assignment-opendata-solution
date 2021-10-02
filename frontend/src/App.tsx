import React from 'react';
import useFetch from 'react-fetch-hook';
import logo from './logo.svg';
import './App.css';
import { Data, SENSOR_KEYS } from './types';
import moment from 'moment';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const API_URL = 'https://winged-odyssey-244910.ew.r.appspot.com/';

const App = (): React.ReactElement => {
  const { isLoading, data, error } = useFetch<Data[]>(API_URL);
  console.log(isLoading, data);
  if (error?.message) {
    return <div>{error?.message}</div>;
  }
  const options = {
    title: {
        text: 'Sensor data',
    },
    xAxis: {
        categories: (data || []).map((d) =>
        moment(d.date).format('DD.MM.y HH:mm')
      ),
    },
    series: SENSOR_KEYS.map((key) => ({
      name: key,
      data: (data || []).map((d) => d[key as keyof Data]),
    })),
  };

  return (
    <div>
      {isLoading ? (
        'Loading....'
      ) : (
        <HighchartsReact highcharts={Highcharts} options={options} />
      )}
    </div>
  );
}

export default App;
