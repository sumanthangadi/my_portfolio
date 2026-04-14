import React from 'react';

const StarBorder = ({
  as: Component = 'div',
  className = '',
  color = '#d97706',
  speed = '6s',
  thickness = 3,
  children,
  ...rest
}) => {
  return (
    <Component
      className={`relative overflow-hidden ${className}`}
      style={{
        padding: `${thickness}px`,
        ...rest.style
      }}
      {...rest}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square z-0 animate-spin"
        style={{
          background: `conic-gradient(from 0deg, transparent 70%, ${color} 100%)`,
          animationDuration: speed
        }}
      ></div>
      
      <div className="relative w-full h-full flex flex-col z-10 rounded-[calc(2rem-3px)] overflow-hidden bg-white">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
