import backgroundImage from '../../public/home/bookzzzz.jpg';
import { Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
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
    <div className="flex flex-col h-screen w-full relative"> {/* Add 'relative' class to the parent container */}
      <Image
        src={backgroundImage}
        alt="bookzzzz"
        fill
        style={{ objectFit: 'cover' }}
      />
      <div className="flex flex-col justify-center items-center w-full absolute top-0 left-0 h-full"> {/* Add 'absolute' and positioning classes to the child container */}
        <p className="text-5xl text-blue-800 mx-auto z-10">BOOK UNIVERSE</p> {/* Add 'z-10' class to ensure the text is visible above the background image */}
        <div className="self-center">
          <Link 
            href="./auth" 
            passHref
          >
            <Button 
              type="primary" 
              size="large" 
              icon={<HomeOutlined />}
            >
              Dive into Milions of Worlds
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}