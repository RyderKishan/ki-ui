import React from 'react';
import styled from 'styled-components';

import './index.css';

interface ButtonProps {
  /**
   * What theme should the button use?
   */
  color?: 'default' | 'primary' | 'secondary';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const StyledButton = styled.button`
`;

const Button = ({ color = 'default', label, ...props }: ButtonProps) => {
  const mode = `kiui-button--${color}`;
  return (
    <StyledButton
      type="button"
      className={['kiui-button', mode].join(' ')}
      {...props}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
