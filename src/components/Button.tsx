import { type ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    isPrimary?: boolean;
};

function DefaultButton({children, onClick, isPrimary = false}: ButtonProps) {

    const primaryClasses = "bg-lime-500 text-white hover:bg-lime-600";
    const secondaryClasses = "text-lime-500 bg-white outline outline-lime-500 hover:bg-gray-100";

    return <>
    <button onClick={onClick} className={`cursor-pointer rounded-sm px-[1em] py-[0.2em] items-center justify-center ${isPrimary ? primaryClasses : secondaryClasses }`}>
        {children}
    </button>
    </>
}

export default DefaultButton