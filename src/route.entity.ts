type LatLng = {lat: number, lng: number}

class Route{
    title: string;
    startPosition: LatLng;
    endPosition: LatLng;
    points: LatLng[];
}