
export default {
    login(state, v) {
        state.userInfo = v;
    },
    loginSuccess(state, v) {
        state.userInfo = v;
    },
    changeNetwork(state, v) {
        state.userInfo = v;
    }
};