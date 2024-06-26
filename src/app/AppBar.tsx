"use client"
import {Menu} from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import Link from 'next/link';

interface AppBarProps {}

const AppBar: React.FC<AppBarProps> = () => {
  return (
    <Menu mode="horizontal" style={{ backgroundColor: '#A7CFFF', height: '60px' }}>
      <Menu.Item key="home">
        <Link href="/">
          <HomeOutlined />
          Home
        </Link>
      </Menu.Item>
      <Menu.Item key="book-universe">
        <span>Book Universe</span>
      </Menu.Item>
    </Menu>
  );
};

export default AppBar;