import { type ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    isPrimary?: boolean;
};

function DefaultButton({children, onClick, isPrimary = false}: ButtonProps) {

    const primaryClasses = "bg-[#4b5043] text-white hover:bg-[#4b5043]/90";
    const secondaryClasses = "text-[#4b5043] bg-white outline outline-[#4b5043] hover:bg-gray-100";

    return <>
    <button onClick={onClick} className={`cursor-pointer rounded-sm px-[1em] py-[0.2em] max-w-[10em] items-center justify-center ${isPrimary ? primaryClasses : secondaryClasses }`}>
        {children}
    </button>
    </>
}

export default DefaultButton