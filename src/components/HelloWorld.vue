<template>
  <div class="hello bg-cover w-full h-72">
    <h1 class="text-white text-2xl text-bold pt-10">IP Address Tracker</h1>

    <div class="flex justify-center align-center items-center mt-10">
      <input
        class="rounded w-96 text-gray-500 h-10"
        type="text"
        name=""
        id="address"
        v-model="domain"
        @keyup.enter="addressIp"
      />
      <button @click="addressIp" class="btn btn-primary bg-black p-3 rounded">
        <img src="../assets/images/icon-arrow.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
export default {

  data() {
    return {
      domain: '8.8.8.8',
    };
  },
  methods: {
addressIp(){
  this.$store.dispatch('addresIp', this.domain);
  this.domain="";
}
  },
  mounted(){
    this.addressIp();
  },
  computed: {
    ...mapGetters(['addres']),
  },
  name: "HelloWorld",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-image: url("../assets/images/pattern-bg.png");
}
</style>
