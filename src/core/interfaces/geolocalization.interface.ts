export interface Geolocalization {
    coords: GeolocationCoordinates,
    timestamp: number
}

interface GeolocationCoordinates {
    accuracy: number,
    altitude: number,
    altitudeAccuracy: number,
    heading: number,
    latitude: number,
    longitude: number,
    speed: number
}
