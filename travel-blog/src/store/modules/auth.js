import { apiClient } from "@/services/api-client";


export default {
    namespaced: true,
    state: {
        token: localStorage.getItem("access_token") || null,
      },
    getters: {
        isAuthenticated: state => !!state.user,
        StateUser: state => state.user

    },
    actions: {
        async login({commit}, payload){
            try {
                console.log("sjjsjs", payload)
                let result = await apiClient.post("/auth/login", payload);
                await commit('setUser', payload.get('email'))
                console.log(result.data.jwtData.token)
                const token = result.data.jwtData.token
                localStorage.setItem("access_token", token);
                console.log(result)
            } catch (error) {   
                throw error.response;   
            }
        }
    
    },
    mutations: {
        setUser(state, email){
            state.user = email
        }
    
    }
}