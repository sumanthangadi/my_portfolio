import React from 'react';

const StarBorder = ({
  as: Component = 'div',
  className = '',
  color = '#d97706',
  speed = '8s',
  thickness = 2,
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
      {/* Outer wrapper to maintain precise centering */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[3000px] h-[3000px] pointer-events-none z-0">
        {/* Inner element dedicated purely to rotation */}
        <div
          className="w-full h-full animate-[spin_8s_linear_infinite]"
          style={{
            background: `conic-gradient(from 0deg, transparent 70%, ${color} 100%)`,
            animationDuration: speed
          }}
        ></div>
      </div>
      
      <div className="relative w-full h-full flex flex-col z-10 rounded-[calc(2rem-2px)] overflow-hidden bg-white/95 backdrop-blur-3xl shadow-inner">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
