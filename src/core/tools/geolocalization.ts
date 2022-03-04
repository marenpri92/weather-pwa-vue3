export default (): Promise<GeolocationPosition>  => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        } else {
            reject((response: GeolocationPositionError) => document.body.innerHTML = response.message);
        }
    });
}
