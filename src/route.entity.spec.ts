import { RouteProps, Route } from './route.entity';

describe('Route Tests', () => {
  test('constructor with empty point list', () => {
    const routeProps: RouteProps = {
      title: 'minha rota',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 }
    };
    const route = new Route(routeProps);
    expect(route.props).toStrictEqual({
      ...routeProps,
      points: []
    });
  });

  test('constructor with points list', () => {
    const routeProps = {
      title: 'minha rota',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
      points: [{ lat: 10, lng: 11 }]
    };
    const route = new Route(routeProps);
    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [{ lat: 10, lng: 11 }]
    });
  });

  test('updateTitle method', () => {
    const routeProps = {
      title: 'minha rota',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
      points: [{ lat: 10, lng: 11 }]
    };
    const route = new Route(routeProps);
    route.updateTitle('outra rota');
    expect(route.title).toEqual('outra rota');
  });

  test('updatePosition method', () => {
    const routeProps = {
      title: 'minha rota',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
      points: [{ lat: 10, lng: 11 }]
    };
    const route = new Route(routeProps);
    const startPosition = { lat: 15, lng: 20 };
    const endPosition = { lat: 30, lng: 40 };
    route.updatePosition(startPosition, endPosition);
    expect(route.startPosition).toBe(startPosition);
    expect(route.endPosition).toBe(endPosition);
  });

  test('updatePoints method', () => {
    const routeProps = {
      title: 'minha rota',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
      points: [{ lat: 10, lng: 11 }]
    };
    const route = new Route(routeProps);
    const points = [
      { lat: 15, lng: 20 },
      { lat: 30, lng: 40 }
    ];
    route.updatePoints(points);
    expect(route.points).toHaveLength(2);
    expect(route.points).toStrictEqual(points);
  });
});
