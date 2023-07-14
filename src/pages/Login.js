
import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const handleLogin = (credentials) => {
    // Xử lý đăng nhập ở đây, ví dụ: gửi thông tin đăng nhập đến server

    // Sau khi xử lý, có thể điều hướng người dùng đến trang khác hoặc cập nhật state
    console.log(credentials);
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Login;

