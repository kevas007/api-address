import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    addres:null,
    latlog:null,
    apiKey:"at_msYeY6y0NMBOcrW37LZJA89J64TKI"
  },
  mutations: {
    addresIp:(state, addres)=> state.addres= addres,
  },
  actions: {
    addresIp({commit,state}, domain){
      axios.get(`
      https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${state.apiKey}&ipAddress=${domain}` )
      .then(res=>{
        commit('addresIp', res.data)
        state.latlog = [res.data.location.lat ,res.data.location.lng]
      })
    }
  },
  modules: {
  },
  getters:{
    addres: state => state.addres
  }
})
