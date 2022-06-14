type LatLng = {lat: number, lng: number}

class Route{
    constructor(
        public title: string,
        public startPosition: LatLng,
        public endPosition: LatLng,
        public points: LatLng[]
    ) {}
}

const rota = new Route('minha rota', 
    {lat: 15, lng: 15},
    {lat: 15, lng: 20},
    [{lat: 15, lng: 15},
    {lat: 15, lng: 20}],
)