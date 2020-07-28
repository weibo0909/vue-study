import Api from '../request/api';

export default {
    login(context, userInfo) {
        setTimeout(() => {
            context.commit('login', userInfo);
            context.commit('returnBackHome');
        }, 500);
    },
    getData(context) {
        Api.home.getData().then(res => {
            context.commit('updateTableData', res.data.data);
        });
    }
};