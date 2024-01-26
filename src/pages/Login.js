import React from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
const { Option } = Select;
const baseUrl = 'https://nodeserver1-51py.onrender.com';

const LogInForm = () => {
    const navigate = useNavigate();
    const onFinish = async (values) => {
        try {
            console.log(values);
            const response = await axios.post(`${baseUrl}/login`, values);
            message.success(response.data.message);
            navigate("/");
        } catch (error) {
            message.error(error.response.data.message);
        }
    };

    return (
        <>
            <Form
                name="login"
                layout="vertical"
                onFinish={onFinish}
                labelCol={{ span: 16 }}
                className="w-full max-w-sm p-10 mt-9 m-auto bg-gray-300"
            >
                <Form.Item
                    label="email"
                    name="email"
                    rules={[{ required: true, type: "email", message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Account Type"
                    name="accountType"
                    rules={[{ required: true, message: 'Please select your account type!' }]}
                >
                    <Select>
                        <Option value="individual">Individual</Option>
                        <Option value="organization">Organization</Option>
                    </Select>
                </Form.Item>

                <Form.Item wrapperCol={{ span: 24 }}>
                    <Button type="primary" htmlType="submit" className="w-full bg-gray-900">
                        Log In
                    </Button>
                </Form.Item>
                <div className="w-full text-center">
                    Dont have an account? <Link to="/signup" className="text-indigo-600">Sign Up</Link>
                </div>
            </Form>
        </>
    );
};

export default LogInForm;