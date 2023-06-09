import React from "react";
import '../css/footer.css';
import '../css/ui.css';

export function Footer() {
    return(
        <div className="footer">
            <ul className="footer-ul wrapper">
                <li>Генератор резюме 2023© </li>
                <li>Контакты</li>                
                <li>
                    <button className="messenger-btn">
                            <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_3_502)">
                            <path d="M20.7398 1.11794C21.0085 1.33322 21.1339 1.68092 21.0645 2.01815L17.8561 17.6015C17.7987 17.8804 17.6149 18.1168 17.3587 18.2412C17.1025 18.3656 16.8031 18.3639 16.5483 18.2365L9.21502 14.5699C8.96107 14.4429 8.7803 14.2054 8.72552 13.9268C8.67074 13.6483 8.74814 13.36 8.9351 13.1463L12.1434 9.47967C12.4768 9.09867 13.0559 9.06007 13.4369 9.39344C13.8179 9.72682 13.8565 10.3059 13.5232 10.6869L11.0961 13.4607L16.3011 16.0632L18.9071 3.4053L3.97021 10.1269L6.82657 11.5551C7.13712 11.7104 7.33329 12.0278 7.33329 12.375V18.1753L8.874 15.9743C9.16432 15.5596 9.73589 15.4587 10.1506 15.749C10.5654 16.0393 10.6662 16.6109 10.3759 17.0256L7.16759 21.609C6.93815 21.9367 6.52263 22.0778 6.14104 21.9576C5.75945 21.8373 5.49996 21.4834 5.49996 21.0833V12.9415L1.42335 10.9032C1.10676 10.7449 0.909599 10.4185 0.916818 10.0646C0.924037 9.71073 1.13435 9.39262 1.45713 9.24737L19.7905 0.997374C20.1044 0.856084 20.4711 0.90265 20.7398 1.11794Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_3_502">
                            <rect width="22" height="22" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                    </button>
                </li>                
                <li><button className="messenger-btn">
                            <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.75 2.75C1.23122 2.75 0 3.98122 0 5.5V16.5C0 18.0188 1.23122 19.25 2.75 19.25H19.25C20.7688 19.25 22 18.0188 22 16.5V5.5C22 3.98122 20.7688 2.75 19.25 2.75H2.75ZM1.83333 5.99059L9.47457 11.0847C10.3983 11.7006 11.6017 11.7006 12.5254 11.0847L20.1667 5.99059V16.5C20.1667 17.0063 19.7563 17.4167 19.25 17.4167H2.75C2.24374 17.4167 1.83333 17.0063 1.83333 16.5V5.99059ZM18.9725 4.58333L11.5085 9.55932C11.2006 9.76459 10.7994 9.76459 10.4915 9.55932L3.02754 4.58333H18.9725Z" fill="white"/>
                            </svg>
                    </button>
                </li>
                            
            </ul>
        </div>
    );
}

export default Footer;