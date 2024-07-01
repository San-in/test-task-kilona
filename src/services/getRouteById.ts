import data from '../bd/data.json';

export const getRouteById = (routeId: string) => {
  return data.busRoutes.find(route => route.id === routeId);
};
