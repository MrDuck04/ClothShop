import {useState} from 'react';
import "./HamburgerMenu.css";
export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <button
        className={`hamburger-menu ${isOpen ? 'open' : ''}`}
        aria-label= {isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        
        >
            <span />
            <span />
            <span />

        </button>
    );
}
