export type LatLng = { lat: number; lng: number };

export type RouteProps = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points: LatLng[];
};

class Route {
  constructor(public props: RouteProps) {}
}

const rota = new Route({
  title: 'minha rota',
  startPosition: { lat: 15, lng: 15 },
  endPosition: { lat: 15, lng: 20 },
  points: [
    { lat: 15, lng: 15 },
    { lat: 15, lng: 20 }
  ]
});
