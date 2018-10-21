import api from '../client';

const Forecast = async (searchTerm, appId) => {
  const results = await api(`/forecast/?q=${searchTerm}&units=metric&APPID=${appId}`);
  return results;
};

export default Forecast;
