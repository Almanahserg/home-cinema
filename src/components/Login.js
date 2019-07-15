import React from 'react';

class Login extends React.Component{
    render() {
        return(
            <form>
                <div>Имя</div>
                <input type="text" name="login" />
                <div>Пароль</div>
                <input type="password" name="password" />
            </form>
        )
    }
}

export default Login