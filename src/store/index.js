import Vue from 'vue'
import Vuex from 'vuex'

/* globally vuex structures */
import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

import wordapi from "@/store/wordapi";
import xfEnglishApi from "@/store/xfEnglishApi";

Vue.use(Vuex)

export default new Vuex.Store({
    strict: false,
    namespaced: true,
    getters,
    mutations,
    state,
    actions,
    modules: {
        wordapi,
        xfEnglishApi
    }
})
