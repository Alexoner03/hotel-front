import axios from 'axios'
import links from '../constantes/url'

const getUserData = async (token) => {
  const {url, headers} = links.user
  try {

    const response = await axios({
      url,
      headers: {
        ...headers,
        'Authorization': `Bearer ${token}`
      },
    })

    const {status, data} = response

    if (status === 200 && data.res) {

      return {
        email: data.data.user_name,
        nombres: data.data.person.name,
        apellidos: `${data.data.person.first_lastname} ${data.data.person.second_lastname}`,
        registrado: data.data.person.created_at,
        id : data.detail.id,
        rolId : data.detail.role_id,
        rol : data.detail.role_id === 1 ? 'ADMINISTRADOR' : 'RECEPCIONISTA',
      }
    }
    return false
  } catch (err) {
    console.error(err)
    return false
  }
}


const state = {
  loggedIn: false,
  email: null,
  nombres: null,
  apellidos: null,
  registrado: null,
  rolId: null,
  rol: null,
  id: null,
}
const mutations = {
  setLoggedIn(state, value) {
    state.loggedIn = value
    localStorage.setItem('loggedIn', true)
  },
  resetState(state){
    state.email = null
    state.nombres = null
    state.apellidos = null
    state.registrado = null
    state.id = null
    state.rolId = null
    state.rol = null
  },
  setUserLogged(state, {user, token}) {
    state.email = user.email
    state.nombres = user.nombres
    state.apellidos = user.apellidos
    state.registrado = user.registrado
    state.id = user.id
    state.rolId = user.rolId
    state.rol = user.rol

    localStorage.setItem('token', token)

  }
}
const actions = {

  async loginUser({commit}, payload) {
    const {url, headers} = links.auth
    try {
      const response = await axios({
        method: 'POST',
        url,
        headers,
        data: JSON.stringify({
          "user_name": payload.user_name,
          "password": payload.password
        }),
      })
      const {status, data} = response

      if (status === 200 && data.res) {
        const user = await getUserData(data.token)
        if (user) {
          commit('setLoggedIn', true);
          commit('setUserLogged', {user, token: data.token});
        }
      }
    } catch (e) {
      console.error(e)
    }
  },
  async logoutUser({commit,state}) {
    const {url, headers} = links.logout
    try {
      const response = await axios({
        url,
        headers: {
          ...headers,
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      })

      const {status, data} = response

      if (status === 200 && data.res) {
        commit('setLoggedIn', false);
        commit('resetState');
        localStorage.removeItem('loggedIn')
        localStorage.removeItem('token')
        return data.message
      }
      return false
    } catch (err) {
      console.error(err)
      return false
    }
  },
  async checkAuth({commit}){
    const token = localStorage.getItem('token')
    const logged = localStorage.getItem('loggedIn')
    if(token && logged){
      const user = await getUserData(token)
      if(user){
        commit('setUserLogged', {user, token});
        commit('setLoggedIn', true);
      }else{
        localStorage.removeItem('token')
        localStorage.removeItem('loggedIn')
        commit('resetState')
      }
    }
  }

}
const getters = {}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
