// 本文件由FirstUI授权予马*健（会员ID： 3 1 56，身份证尾号：0 1 04  3X）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
// #ifdef MP
import http from '../common/fui-request'
// #endif
// #ifndef VUE3
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
			// #endif

			// #ifdef VUE3
			import {
				createStore
			} from 'vuex'
			const store = createStore({
				// #endif
				state: {
					// version: "0.0.2"
				},
				mutations: {
					//登录
					login(state, payload) {
						if (payload) {
							state.token = payload.token
							uni.setStorageSync('firstui_m_token',payload.token)
						}
						state.isLogin = true
					},
					//退出登录
					logout(state) {
						state.token = ""
						state.isLogin = false
						uni.removeStorageSync('firstui_m_token')
					}
				},
				actions: {

				}
			})

			export default store