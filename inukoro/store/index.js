import Vuex from 'vuex'

const appStore = () => {
    return new Vuex.Store({
        state: {
            breed_list: {},
            dog_list: [],
        },
        mutations: {
            breed_list_update(state, payload) {
                state.breed_list = {...payload}
            },
            dog_list_update(state, payload) {
                state.dog_list = [...payload]
            },
        }
    })
};

export default appStore