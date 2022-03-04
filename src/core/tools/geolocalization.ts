export default (): Promise<GeolocationPosition>  => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        } else {
            reject((response: GeolocationPositionError) => {
                console.log('error', response);
                document.body.innerHTML = response.message
            });
        }
    });
}
