# Maps

For maps we've used some components from a react library [vue-google-maps](https://github.com/xkjyeah/vue-google-maps) which is a 
wrapper over the original google maps library.
You can use it by simply importing the maps view in the page you want to render it:
```js
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'API_KEY_HERE'
  }
})
```

For this component to work, you will need a google maps API key

Follow these steps to get an API key:

1. Go to the [Google API Console](https://console.developers.google.com/flows/enableapi?apiid=maps_backend,geocoding_backend,directions_backend,distance_matrix_backend,elevation_backend,places_backend&reusekey=true&pli=1)
2. Create or select a project.
3. Click Continue to enable the API and any related services.
4. On the Credentials page, get an API key.
5. Note: If you have an existing unrestricted API key, or a key with browser restrictions, you may use that key.
6. From the dialog displaying the API key, select Restrict key to set a browser restriction on the API key.
7. In the Key restriction section, select HTTP referrers (web sites), then follow the on-screen instructions to set referrers.
8. (Optional) Enable billing. See [Usage Limits](https://developers.google.com/maps/documentation/javascript/usage) for more information.

## Sample maps 

```html
/*vue*/
<desc>
</desc>
<template>
  <gmap-map
      style="height: 300px;"
      id="map"
      :center="center"
      :zoom="13"
      map-type-id="terrain"
    >
    <gmap-marker :position="center"></gmap-marker>
  </gmap-map>
</template>

<script>
  export default {
    data () {
        return {
           center: {
             lat: 40.748817,
             lng: -73.985428
           }
        }
      }
  }
</script>
```

!> Fore detailed usage please refer to [vue-google-maps](https://github.com/xkjyeah/vue-google-maps)
and [google-maps](https://developers.google.com/maps/documentation/javascript/)
