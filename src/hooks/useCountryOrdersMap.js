import { useState, useEffect } from 'react';

const mockMapData = {
  US: { name: 'United States', orders: 12450, value: '$452,100', lat: 37.0902, lng: -95.7129, fill: '#3b82f6' },
  DE: { name: 'Germany', orders: 8320, value: '$284,500', lat: 51.1657, lng: 10.4515, fill: '#10b981' },
  JP: { name: 'Japan', orders: 6100, value: '$198,200', lat: 36.2048, lng: 138.2529, fill: '#8b5cf6' },
  BR: { name: 'Brazil', orders: 4890, value: '$142,800', lat: -14.235, lng: -51.9253, fill: '#f59e0b' },
  GB: { name: 'United Kingdom', orders: 5400, value: '$176,400', lat: 55.3781, lng: -3.436, fill: '#ec4899' },
  AU: { name: 'Australia', orders: 3910, value: '$118,600', lat: -25.2744, lng: 133.7751, fill: '#06b6d4' }
};

export function useCountryOrdersMap() {
  const [selectedCountry, setSelectedCountry] = useState('US');
  const [mapData, setMapData] = useState(mockMapData);

  const selectCountry = (code) => {
    if (mapData[code]) {
      setSelectedCountry(code);
    }
  };

  return {
    selectedCountry,
    countryDetails: mapData[selectedCountry],
    mapData,
    selectCountry
  };
}

export default useCountryOrdersMap;
