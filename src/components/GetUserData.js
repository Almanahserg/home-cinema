import { BASE_URL } from "../constants";
import jwt_decode from 'jwt-decode';
import axios from "axios";

let user;

const GetUserData = async (props) => {
    const decoded = jwt_decode( props.user );

    const userSessionIsOver = () => {
        const dateOverUserSession = new Date( decoded.exp * 1000 );
        const today = new Date();
        return dateOverUserSession < today
    };

    if(!userSessionIsOver()) {
        let obj = {
            link: `${ BASE_URL }/users/${ decoded.id }`,
            object: {
                method: 'get',
                headers: {
                    'Authorization': 'Bearer ' + props.user,
                    'Content-Type': 'application/json'
                }
            }
        };
        user = await getUser( obj ).then( respnse => respnse.user );
    }

    return user
};

const getUser = (obj) => {
    return axios.get( obj.link, obj.object )
        .then( response => response.data )
};

export default GetUserData