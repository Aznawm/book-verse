"use client"

import { useState } from 'react';
import { Form, Input, Button } from 'antd';
import './styles/AuthPage.css';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true); // Default to login page

  const toggleAuthMode = () => {
    setIsLogin(prev => !prev); // Toggle between login and signup
  };

  const handleSubmit = (values: any) => {
    console.log('Form values:', values);
    // Add your login or signup logic here
  };
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="wrapper">
          <div className="title-text">
            <div className={`title ${isLogin ? 'login' : 'signup'}`}>
              {isLogin ? 'Log In' : 'Sign Up'}
            </div>
          </div>
          <div className="form-container">
            <div className="slide-controls">
              <input type="radio" name="slide" id="login" checked={isLogin} />
              <input type="radio" name="slide" id="signup" checked={!isLogin} />
              <label htmlFor="login" className={`slide login`}>
                Login
              </label>
              <label htmlFor="signup" className={`slide signup`}>
                Signup 
              </label>
              <div className="slider-tab"></div>
            </div>
            <div className="form-inner">
              <Form
                name={isLogin ? 'login' : 'signup'}
                initialValues={{ remember: true }}
                onFinish={handleSubmit}
                style={{ width: '100%' }}
              >
                <div className="field">
                  <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                  >
                    <Input placeholder="someone@gmail.com" />
                  </Form.Item>
                </div>
                <div className="field">
                  <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                  >
                    <Input.Password placeholder="password" />
                  </Form.Item>
                </div>
                {!isLogin && (
                  <div className="field">
                    <Form.Item
                      name="confirmPassword"
                      dependencies={['password']}
                      rules={[
                        { required: true, message: 'Please confirm your password!' },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(new Error('The two passwords do not match!'));
                          },
                        }),
                      ]}
                    >
                      <Input.Password placeholder="confirm password" />
                    </Form.Item>
                  </div>
                )}
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                    {isLogin ? 'Log In' : 'Sign Up'}
                  </Button>
                </div>
                <div className={`signup-link ${isLogin ? 'login' : 'signup'}`}>
                  {isLogin ? (
                    <span>Not a member? <a href="#" onClick={toggleAuthMode}>Signup now</a></span>
                  ) : (
                    <span>Already have an account? <a href="#" onClick={toggleAuthMode}>Log In</a></span>
                  )}
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;