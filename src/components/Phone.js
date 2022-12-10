import { useEffect, useState, useRef } from "react";

const Phone = ({ AnimateOnPageLoad }) => {
    const [output, setOutput] = useState("");
    const styleRef = useRef(null);

    const roomNames = [
        "The Room One",
        "Lounge Area",
        "The Office",
        "Just Chatting",
        "Family Chat",
        "BBQ Planing",
        "Secret room",
        "Chatting",
    ];

    const displayName = () => {
        if (styleRef.current) {
            const randomRoom = roomNames[Math.floor(Math.random() * roomNames.length)];
            setOutput(randomRoom);
            setTimeout(displayName, 4000);
            styleRef.current.animate({
                opacity: [0, 1, 0],
            }, 2500);
        }
    };

    AnimateOnPageLoad(".phone");

    useEffect(() => {
        displayName();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="h-[60%] rounded-2xl absolute sm:relative sm:h-[80%] z-10 bg-[#363946] sm:bg-transparent ">

            <svg className=" opacity-50 sm:opacity-100 phone" width="100%" height="100%" viewBox="0 0 401 635" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_3_16)">
                    <g filter="url(#filter1_d_3_16)">
                        <rect x="5" y="7" width="391" height="620" rx="23" fill="#FEF6EC" />
                    </g>
                    <g filter="url(#filter2_d_3_16)">
                        <rect x="5" y="7" width="391" height="96.2069" rx="23" fill="#FEF6EC" />
                        <text x="50%" y="10%" fontFamily="Verdana" fontSize="35" fill="blue" ref={styleRef} className=" opacity-0" style={{ textAnchor: "middle" }}>{output}</text>
                    </g>
                    <path fill="black" />
                    <rect x="28" y="170" width="205" height="150.843" rx="23" fill="#D9D9D9" />
                    <rect x="180" y="343.13" width="205" height="66.5134" rx="23" fill="#D9D9D9" />
                    <ellipse cx="39" cy="468.939" rx="5" ry="5.9387" fill="#D9D9D9" />
                    <ellipse cx="71" cy="468.939" rx="5" ry="5.9387" fill="#D9D9D9" />
                    <ellipse cx="103" cy="468.939" rx="5" ry="5.9387" fill="#D9D9D9" />
                    <path d="M5 548.609H396V604C396 616.703 385.703 627 373 627H28C15.2975 627 5 616.703 5 604V548.609Z"
                        fill="#D9D9D9" />
                </g>
                <defs>
                    <filter id="filter0_d_3_16" x="1" y="7" width="399" height="628" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_16" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_16" result="shape" />
                    </filter>
                    <filter id="filter1_d_3_16" x="0" y="0" width="401" height="630" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha" />
                        <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_3_16" />
                        <feOffset dy="-2" />
                        <feGaussianBlur stdDeviation="1.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_16" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_16" result="shape" />
                    </filter>
                    <filter id="filter2_d_3_16" x="4" y="7" width="393" height="99.2069" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha" />
                        <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_3_16" />
                        <feOffset dy="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_16" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_16" result="shape" />
                    </filter>
                </defs>
            </svg>

        </div >
    )
}

export default Phone