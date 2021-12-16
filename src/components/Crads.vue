<template>
    <div class="app absolute z-50 left-96 top-64">
<div v-if="addres" class="max-w-2xl flex  justify-between px-20 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div>
        <h1 class="text-2xl text-center text-gray-800">IP Address</h1>
        <p>
            {{addres.ip}}
        </p>
    </div>
    <hr class="bg-black w-2">
    <div>
        <h1 class="text-2xl text-center text-gray-800">Location</h1>
        <p>
            {{addres.location.city}},
            {{ addres.location.country}}
            {{ addres.location.postalCode }}
        </p>
    </div>
    <hr>
    <div>
        <h1 class="text-2xl text-center text-gray-800">Time Zone</h1>
        <p>
            {{addres.location.timezone}}
        </p>
    </div>
    <hr>
    <div>
        <h1 class="text-2xl text-center text-gray-800">ISP</h1>
        <p>
            {{addres.isp}}
        </p>
    </div>
</div>
    </div>
</template>

<script>
import{mapGetters} from 'vuex'
export default {
    name:'Cards',
    computed: {
        ...mapGetters(['addres']),
    },
}
</script>