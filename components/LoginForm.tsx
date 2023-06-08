import React, { FC, useState } from 'react';

const LoginForm:FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    return (
        <div>   
            <input 
                type="text" 
                placeholder='Email'
                value={email}
                onChange={e => setEmail(e.target.value)} />
            <input/>
            <input 
                type="text" 
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)} />
            <input/>
            <button>Логин</button>
            <button>Регистрация</button>
        </div>
    );
};

export default LoginForm;