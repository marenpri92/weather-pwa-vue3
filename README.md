# Weather PWA with [vue3](https://vuejs.org/)+[ts](https://www.typescriptlang.org/)+[vite](https://vitejs.dev/)+[workbox](https://developers.google.com/web/tools/workbox)+[tailwindcss](https://tailwindcss.com/)
PWA app that allows you see the weather by location using this [Weather api](https://openweathermap.org/api).

### It is runing in the [Public PWA](https://vigilant-goldwasser-5a356c.netlify.app/)

## Set up the project for running locally
### Set your env variables:
 1- Create .env file in the root of the project and copi the content from env.example:
```
VITE_BASE_URL=https://api.openweathermap.org/data/2.5
VITE_API_KEY=api key
VITE_API_ICON=https://openweathermap.org/img/wn
```
 2- Login in [Weather api](https://openweathermap.org/api) to get your own "api key" and then replace the texts for the real data.
 
 ### Install the dependencies:
 ```
 npm install
 ```
 ### Run the project:
 ```
 npm run dev
 ```
