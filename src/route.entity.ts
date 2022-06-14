type LatLng = {lat: number, lng: number}

class Route{
    constructor(
        public title: string,
        public startPosition: LatLng,
        public endPosition: LatLng,
        public points: LatLng[]
    ) {}
}