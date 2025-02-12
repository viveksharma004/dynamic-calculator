import React, { useState } from "react";
import { HiOutlineBackspace } from "react-icons/hi";

const ArithematicCalculator = ({ theme }) => {
    let [result, setResult] = useState("");

    const handleClick = (e) => {
        if (result.length >= 16) {
            setResult("!Large Input");
            setTimeout(() => {
                setResult("");
            }, 2000);
            return;
        }
        if (result.charAt(0) === "0") {
            result = result.slice(1, result.length);
        }
        setResult(result.concat(e.target.name));
    };

    const handleBackspace = () => {
        setResult(result.slice(0, result.length - 1));
    };

    const calculate = () => {
        try {
            result = eval(result).toString();
            if (result.includes(".")) {
                result = +eval(result);
                result = result.toFixed(4).toString();
                setResult(result);
            } else {
                setResult(eval(result).toString());
            }
        } catch (err) {
            setResult("Error");
        }
    };


    const keyPadCSS = "m-[4px] mt-[7px] border border-gray-400 rounded-md cursor-pointer text-xl";
    const clickAbleButtonCSS = "text-white bg-teal-400 text-xl font-semibold m-[4px] mt-[7px] border border-gray-400 rounded-md cursor-pointer flex justify-center items-center";

    const containerStyle = `w-[350px] h-[500px] p-[40px] pt-[30px] box-border rounded-2xl shadow-[5px_5px_5px_rgba(230,230,230,0.547),_5px_5px_5px_rgba(84,174,187,0.483),_inset_-2px_-2px_5px_rgba(253,248,248,0.58),_inset_2px_2px_5px_rgba(145,219,234,0.5)]
    ${theme === 'dark' ? 'bg-[#3D4159] text-white' : 'bg-white text-gray-700'}`;

    const inputStyle = `h-[80px] w-full bg-transparent text-4xl outline-none border border-gray-400 rounded-sm text-right font-bold tracking-wider
    ${theme === 'dark' ? 'text-white border-gray-600' : 'text-gray-700'}`;
    return (
        <div className="flex flex-col justify-center items-center gap-[40px]">
            <div>
                <h1 className={`text-4xl font-semibold ${theme==='light'?"text-gray-50":"text-gray-700"}`}>Emi Calculator</h1>
            </div>
            <div className={containerStyle}>
                <form action="">
                    <input
                        type="text"
                        value={result}
                        readOnly
                        className={inputStyle}
                    />
                </form>

                <div className="grid grid-cols-4 grid-rows-[repeat(5,minmax(60px,auto))]">
                    <button
                        onClick={() => setResult("")}
                        className={` clear col-span-2 ${clickAbleButtonCSS}`}>
                        clear
                    </button>
                    <button
                        onClick={handleBackspace}
                        className={`backspace color ${clickAbleButtonCSS}`}
                    >
                        <HiOutlineBackspace/>
                    </button>
                    <button
                        name="/"
                        onClick={handleClick}
                        className={`color ${clickAbleButtonCSS}`}
                    >
                        /
                    </button>
                    <button name="7" onClick={handleClick} className={keyPadCSS}>
                        7
                    </button>
                    <button name="8" onClick={handleClick} className={keyPadCSS}>
                        8
                    </button>
                    <button name="9" onClick={handleClick} className={keyPadCSS}>
                        9
                    </button>
                    <button
                        name="*"
                        onClick={handleClick}
                        className={`color ${clickAbleButtonCSS}`}
                    >
                        *
                    </button>
                    <button name="4" onClick={handleClick} className={keyPadCSS}>
                        4
                    </button>
                    <button name="5" onClick={handleClick} className={keyPadCSS}>
                        5
                    </button>
                    <button name="6" onClick={handleClick} className={keyPadCSS}>
                        6
                    </button>
                    <button
                        name="-"
                        onClick={handleClick}
                        className={`color ${clickAbleButtonCSS}`}
                    >
                        -
                    </button>
                    <button name="1" onClick={handleClick} className={keyPadCSS}>
                        1
                    </button>
                    <button name="2" onClick={handleClick} className={keyPadCSS}>
                        2
                    </button>
                    <button name="3" onClick={handleClick} className={keyPadCSS}>
                        3
                    </button>
                    <button
                        name="+"
                        onClick={handleClick}
                        className={`color ${clickAbleButtonCSS}`}
                    >
                        +
                    </button>
                    <button name="0" onClick={handleClick} className={keyPadCSS}>
                        0
                    </button>
                    <button name="." onClick={handleClick} className={keyPadCSS}>
                        .
                    </button>
                    <button
                        onClick={calculate}
                        className={`equal color col-span-2 ${clickAbleButtonCSS}`}
                    >
                        =
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ArithematicCalculator;