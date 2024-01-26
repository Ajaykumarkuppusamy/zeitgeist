import React from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';

const { Option } = Select;
const baseUrl = 'https://nodeserver1-51py.onrender.com';

const SignUpForm = () => {
    const navigate = useNavigate();
    const onFinish = async (values) => {
        try {
            const response = await axios.post(`${baseUrl}/signup`, values);
            message.success(response.data.message);
            navigate("/login");
        } catch (error) {
            message.error(error.response.data.error);
        }
    };

    return (
        <Form
            name="signup"
            onFinish={onFinish}
            layout='vertical'
            labelCol={{ span: 8 }}
            initialValues={{ accountType: 'individual' }}
            className="w-full max-w-sm mx-auto mt-10 bg-gray-300 p-10"
        >
            <Form.Item
                label="Email"
                name="email"
                maxLength={35}
                rules={[{ required: true, type: "email", message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                maxLength={16}
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                label="AccountType"
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
                    Sign Up
                </Button>
            </Form.Item>

            <div className="w-full text-center">
                Already have an account? <Link to="/login" className="text-indigo-600">Log In</Link>
            </div>
        </Form>
    );
};

export default SignUpForm;
