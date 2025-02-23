import React from 'react';

const styles = {
  text: {
    transition: 'color 0.3s, border 0.3s, transform 0.3s, box-shadow 0.3s, font-weight 0.3s',
    border: '2px solid transparent',
    borderRadius: '8px',
    // display: 'inline-block',
  },
  hoveredText: {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
};

interface HoverTextProps {
  text: string;
  isHovered: boolean;
  color: string;
  onMouseOver: () => void;
  onMouseOut: () => void;
}

const HoverText = ({ text, isHovered, color, onMouseOver, onMouseOut }: HoverTextProps) => {
  return (
    <span
      style={{
        ...styles.text,
        ...(isHovered ? styles.hoveredText : {}),
        color: color,
        backgroundColor: isHovered ? `${color}19` : 'transparent',
      }}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {text}
    </span>
  );
};

export default HoverText;
