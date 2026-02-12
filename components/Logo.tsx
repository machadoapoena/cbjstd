
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 48 }) => {
  return (
    <img 
      src="https://i0.wp.com/fbx.org.br/wp-content/uploads/2022/05/Logo-FBX-1.png?resize=512%2C512" 
      alt="Logo Federação Brasiliense de Xadrez" 
      className={`inline-block object-contain ${className}`} 
      style={{ 
        width: size, 
        height: size,
        display: 'block' 
      }} 
    />
  );
};

export default Logo;
