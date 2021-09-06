import axios from 'axios'
import QS from 'qs'

const userApi = {
    login() {
        return axios.get(`${base.egg}/api/role` );
    }
}
export default userApi;
