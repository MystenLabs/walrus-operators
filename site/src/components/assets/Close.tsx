import { SVGProps } from "react"

export const Close = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g id="Frame">
                <g id="Group">
                    <path
                        id="Vector"
                        d="M27 5L5 27"
                        stroke="#98EFE4"
                        stroke-width="3"
                        stroke-miterlimit="10"
                        stroke-linecap="square"
                    />
                    <path
                        id="Vector_2"
                        d="M27 27L5 5"
                        stroke="#98EFE4"
                        stroke-width="3"
                        stroke-miterlimit="10"
                        stroke-linecap="square"
                    />
                </g>
            </g>
        </svg>
    )
}
