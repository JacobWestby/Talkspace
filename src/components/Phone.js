
const Phone = ({ inputText }) => {

    return (
        <div className="h-[60%] rounded-2xl absolute sm:relative sm:h-[80%] z-10 bg-[#000000] sm:bg-transparent ">

            <svg className=" opacity-40 sm:opacity-100" width="100%" height="100%" viewBox="0 0 399 628" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_3_16)">
                    <rect x="4" width="391" height="620" rx="23" fill="#FEF6EC" />
                    <g filter="url(#filter1_d_3_16)">
                        <rect x="4" width="391" height="96.2069" rx="23" fill="#FEF6EC" />
                    </g>
                    <path fill="black" />
                    <text x="25%" y="60" fontFamily="Verdana" fontSize="35" fill="blue">{inputText}</text>
                    <rect x="76" y="159.157" width="205" height="150.843" rx="23" fill="#D9D9D9" />
                    <rect x="179" y="336.13" width="205" height="66.5134" rx="23" fill="#D9D9D9" />
                    <ellipse cx="40" cy="176.973" rx="27" ry="32.069" fill="#D9D9D9" />
                    <ellipse cx="40" cy="435.069" rx="27" ry="32.069" fill="#D9D9D9" />
                    <ellipse cx="81" cy="460.843" rx="5" ry="5.9387" fill="#D9D9D9" />
                    <ellipse cx="113" cy="460.843" rx="5" ry="5.9387" fill="#D9D9D9" />
                    <ellipse cx="145" cy="460.843" rx="5" ry="5.9387" fill="#D9D9D9" />
                    <path d="M4 541.609H395V597C395 609.703 384.703 620 372 620H27C14.2974 620 4 609.703 4 597V541.609Z"
                        fill="#D9D9D9" />
                </g>
                <defs>
                    <filter id="filter0_d_3_16" x="0" y="0" width="399" height="628" filterUnits="userSpaceOnUse"
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
                    <filter id="filter1_d_3_16" x="3" y="0" width="393" height="99.2069" filterUnits="userSpaceOnUse"
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