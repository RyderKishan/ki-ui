/// <reference types="react" />
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
declare const Button: ({ color, label, ...props }: ButtonProps) => JSX.Element;
export default Button;
