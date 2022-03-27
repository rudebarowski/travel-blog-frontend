import { apiClient } from "@/services/api-client";


export default {
    namespaced: true,
    state: {
        token: localStorage.getItem('access_token') || null
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
                console.log("omo oh");
                let token = result.data.data.jwtData.token
                console.log("hello token", token)
                localStorage.setItem("access_token", token)
                await commit('setUser', payload.email)
                console.log(result.data.data.jwtData.token)
                
                
                return result
            } catch (error) {
                throw error.response;   
            }
        },
        async addBlog(_, payload){
            try{
                let result = await apiClient.post("/blogs/create", payload);
                return result.data
            } catch (error) {
                throw error.response;   
            }
        },
        async updateProfile(_, payload){
            try{
                let result = await apiClient.post("/user/edit", payload);
                return result.data
            } catch (error) {
                throw error.response;   
            }
        },
        async getProfile(){
            try {
                let result = await apiClient.get("/user/profile");
                console.log(result)
                return result.data
                
            } catch (error) {
                throw error.response
            }
        }
    
    },
    mutations: {
        setUser(state, email){
            state.user = email
        }
    
    }
}