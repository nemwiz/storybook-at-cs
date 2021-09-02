import React from 'react';
import './button.css';

interface DocsButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
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
export const DocsButton = ({primary = false, size = 'medium', label, ...props}: DocsButtonProps) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        <button type="button" className={['storybook-button', `storybook-button--${size}`, mode].join(' ')} {...props}>
            {label}
        </button>
    );
};
