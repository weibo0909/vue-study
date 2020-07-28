import router from '../router';

export default {
    login(state, v) {
        state.userInfo = v;
    },
    returnBackHome() {
        router.push({path: '/home'});
    },
    loginSuccess(state, v) {
        state.userInfo = v;
    },
    changeNetwork(state, v) {
        state.userInfo = v;
    },
    updateTableData(state, v) {
        state.tableData = v;
    }
};