export type LatLng = { lat: number; lng: number };

export type RouteProps = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
};

export class Route {
  public props: Required<RouteProps>;
  constructor(props: RouteProps) {
    this.props = {
      ...props,
      points: props.points || []
    };
  }

  updateTitle(value: string) {
    this.title = value;
  }

  updatePosition(startPosition: LatLng, endPosition: LatLng) {
    this.startPosition = startPosition;
    this.endPosition = endPosition;
  }

  updatePoints(points: LatLng[]) {
    this.points = points;
  }

  get title() {
    return this.props.title;
  }

  private set title(value: string) {
    this.props.title = value;
  }

  get startPosition() {
    return this.props.startPosition;
  }

  private set startPosition(value: LatLng) {
    this.props.startPosition = value;
  }

  get endPosition() {
    return this.props.endPosition;
  }

  private set endPosition(value: LatLng) {
    this.props.endPosition = value;
  }

  get points() {
    return this.props.points;
  }

  private set points(value: LatLng[]) {
    this.props.points = value;
  }
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
