import backgroundImage from '../../public/home/bookzzzz.jpg';
import { Button } from 'antd';
import { HomeOutlined, FolderOutlined } from '@ant-design/icons';
import Image from "next/image";
import React from "react";
import Link from 'next/link';

interface ButtonProps {
  type?: 'primary' | 'default' | 'ghost' | 'dashed' | 'link' | undefined;
  size?: 'large' | 'small' | undefined;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full relative items-center justify-center">
      <Image
        src={backgroundImage}
        alt="bookzzzz"
        fill
        style={{ objectFit: 'cover' }}
      />
      <div className="flex justify-between w-full max-w-md px-4"> {/* Add 'flex' and 'justify-between' classes to create a flex container with space between buttons */}
        <div className="self-center">
          <Link 
            href="./auth" 
            passHref
          >
            <Button 
              type="primary" 
              size="large" 
              icon={<HomeOutlined />}
              className="mt-10"
            >
              Dive into Milions of Worlds
            </Button>
          </Link>
        </div>
        <div className="self-center">
          <Link 
            href="./categories" 
            passHref
          >
            <Button 
              type="default" 
              size="large" 
              icon={<FolderOutlined />}
              className="mt-10"
            >
              Browse Categories
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}