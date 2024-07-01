import {SvgProps} from 'react-native-svg';

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

interface Position {
  latitude: number;
  longitude: number;
}

interface Seat {
  seatNumber: number;
  occupied: boolean;
}

interface BusRoute {
  id: string;
  name: string;
  route: string;
  totalSeats: number;
  seats: Seat[];
  averageSpeed: number;
}

interface BusRoutesResponse {
  busRoutes: BusRoute[];
}
