import React, { useState, useEffect } from "react";

interface ButtonWithLoadingProps {
    onSubmit: () => Promise<{ success: boolean }>;
    children: React.ReactNode;
}

const ButtonWithLoading: React.FC<ButtonWithLoadingProps> = ({
    onSubmit,
    children,
}) => {
    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");
    const [isDisabled, setIsDisabled] = useState(false);
    const [buttonClass, setButtonClass] = useState("btn");

    useEffect(() => {
        setButtonClass(getClassName());
    }, [status]);

    const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setStatus("loading");
        setIsDisabled(true);

        try {
            const result = await onSubmit();
            console.log("result is ", result);
            if (result.success) {
                console.log("success");
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
        setIsDisabled(false);
    };

    const getClassName = () => {
        console.log("status is ", status);
        switch (status) {
            case "loading":
                return "btn loading";
            case "success":
                return "btn btn-success";
            case "error":
                return "btn btn-error";
            default:
                return "btn";
        }
    };

    return (
        <button
            className={buttonClass}
            onClick={handleClick}
            disabled={isDisabled}
        >
            {status === "loading" ? "Loading..." : children}
        </button>
    );
};

export default ButtonWithLoading;
