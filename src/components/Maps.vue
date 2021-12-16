<template>
    <l-map v-if="latlog" style="height: 440px" :zoom="zoom" class="z-10 relative" :center="latlog">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker :lat-lng="latlog"></l-marker>
    </l-map>
</template>

<script>
import { Icon } from 'leaflet';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import{mapGetters, mapState} from 'vuex'
export default {
    components: {
        LMap,
        LTileLayer,
        LMarker
    },
    data() {
        return {
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution:
            '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            zoom: 15,
            // center: null,
            // markerLatLng: null,

        };
    },
    methods: {
    },
    mounted() {
        delete Icon.Default.prototype._getIconUrl;
        Icon.Default.mergeOptions({
            iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
            iconUrl: require('leaflet/dist/images/marker-icon.png'),
            shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        });
    },
    computed: {
        ...mapGetters(['addres']),
        ...mapState(['latlog']),

    },
}
</script>