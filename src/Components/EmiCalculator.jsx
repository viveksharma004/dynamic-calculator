import React, { useState, useEffect } from 'react';
import circleSVG from "../assets/Component 1.png";

const EmiCalculator = ({ theme }) => {
    const [loanAmount, setLoanAmount] = useState(50000);
    const [tenureInMonths, setTenureInMonths] = useState(12);
    const [interestRate, setInterestRate] = useState(10);
    const [emi, setEmi] = useState(0);
    const [payableAmount, setPayableAmount] = useState(0);

    useEffect(() => {
        calculateEmi();
    }, [loanAmount, tenureInMonths, interestRate]);

    const calculateEmi = () => {
        const monthlyInterestRate = interestRate / 1200;
        const emiValue =
            loanAmount *
            monthlyInterestRate *
            (Math.pow(1 + monthlyInterestRate, tenureInMonths) /
                (Math.pow(1 + monthlyInterestRate, tenureInMonths) - 1));

        const payableAmountValue = (emiValue * tenureInMonths).toFixed(0);
        setPayableAmount(parseFloat(payableAmountValue));
        setEmi(parseFloat(emiValue.toFixed(0)));
    };

    const calculateInterestAmount = () => {
        return payableAmount - loanAmount
    }
    const handleLoanAmountChange = (e) => {
        setLoanAmount(parseInt(e.target.value, 10));
    };

    const handleTenureChange = (e) => {
        setTenureInMonths(parseInt(e.target.value, 10));
    };

    const handleInterestRateChange = (e) => {
        setInterestRate(parseInt(e.target.value, 10));
    };

    // CSS classes from Arithmetic Calculator (light mode)
    const arithmeticLightContainer = "shadow-[5px_5px_5px_rgba(230,230,230,0.547),_5px_5px_5px_rgba(84,174,187,0.483),_inset_-2px_-2px_5px_rgba(253,248,248,0.58),_inset_2px_2px_5px_rgba(145,219,234,0.5)]";
    const arithmeticLightInput = "h-[80px] w-full bg-transparent text-4xl outline-none border border-gray-400 rounded-sm text-right font-bold tracking-wider";
    const arithmeticLightText = "text-gray-700"; // Added to be more comprehensive



    const containerClass = `flex flex-col gap-[30px]  w-full md:w-[70%]  md:mx-auto
    ${theme === 'light' ? arithmeticLightText  : 'text-[#fff]'}`; // text change according to theme

    const loanCalculatorClass = `max-md:mx-[10px] py-[30px] rounded-[24px] 
    ${theme === 'light' ? 'bg-[#ffff] ' + arithmeticLightText +" "+arithmeticLightContainer : 'bg-[#3D4159] shadow-md' + 'text-[#fff]'}`;

    return (
        <div className={containerClass }>
            {/* Loan Calculator Section Preview */}
            <div className={loanCalculatorClass}>
                <div className='flex flex-col md:flex-row gap-[10px] md:gap-[20px] items-center'>
                    <div className='md:w-[25%] px-[10px]'>
                        <div className=" flex items-center justify-center  relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] mx-auto mb-4">
                            <img src={circleSVG} alt="" />
                            <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center rounded-full">
                                <p className={`text-[12px] text-center font-normal
                                ${theme === 'light' ? arithmeticLightText : 'text-[white]'}`}>
                                    EMI PER MONTH
                                    <br />
                                    <span className='text-[24px] md:text-[27px] font-semibold'>₹{emi}</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 md:w-[75%] font-semibold'>
                        <div className="grid  md:grid-cols-3 gap-[26px] md:px-[20px] max-md:pt-[10px] md:border-l-[1px] max-md:border-t-[1px] border-[white] border-opacity-10 ">
                            {/* Loan Amount INput taker and calculator  */}
                            <div className='col-span-1 flex flex-col gap-[20px]'>
                                <div className='flex justify-between'>
                                    <label
                                        htmlFor="loanAmount"
                                        className={`block mb-1 text-[12px] md:text-[14px]
                                        ${theme === 'light' ? arithmeticLightText : ''}
                                        `}
                                    >
                                        Loan Amount
                                    </label>
                                    <div className='bg-[white] rounded-md px-[16px] py-1'>
                                        <p className={`text-[12px] md:text-[14px] text-[black]`}>
                                            {loanAmount}
                                        </p>
                                    </div>

                                </div>
                                <div className='flex items-center  '>
                                    <input
                                        type="range"
                                        min={50000}
                                        max={2500000}
                                        step={50000}
                                        value={loanAmount}
                                        onChange={handleLoanAmountChange}
                                        className="w-full h-1 md:h-2 bg-[#898989] rounded-lg appearance-none  cursor-pointer accent-[white] "
                                    />

                                </div>
                                <div className='flex justify-between text-[#ADADAD]'>
                                    <span className={` text-[12px] md:text-[14px] text-opacity-70 ${theme === 'light' ? arithmeticLightText : ''}`}>₹ {loanAmount / 1000}K</span>
                                    <span className={`  text-[12px] md:text-[14px] ${theme === 'light' ? arithmeticLightText : ''}`}>₹ {loanAmount / 100000}L</span>
                                </div>
                            </div>

                            {/* Tenure t (Months) */}
                            <div className='col-span-1 flex flex-col gap-[20px]'>
                                <div className='flex justify-between'>
                                    <label
                                        htmlFor="tenure"
                                        className={`block mb-1 text-[12px] md:text-[14px] 
                                        ${theme === 'light' ? arithmeticLightText : ''}`}
                                    >
                                        Tenure(Months)
                                    </label>
                                    <div className='bg-[white] rounded-md px-[16px] py-1'>
                                        <p className={`text-[12px] md:text-[14px] text-[black]`}>{tenureInMonths}</p>
                                    </div>
                                </div>

                                <div className='flex items-center'>
                                    <input
                                        type="range"
                                        min={12}
                                        max={60}
                                        value={tenureInMonths}
                                        onChange={handleTenureChange}
                                        className="w-full h-1 md:h-2 bg-[#898989] rounded-lg appearance-none cursor-pointer accent-[white]"
                                    />
                                </div>
                                <div className='flex justify-between text-[#ADADAD]'>
                                    <span className={` text-[12px] md:text-[14px] ${theme === 'light' ? arithmeticLightText : ''}`}>12</span>
                                    <span className={`  text-[12px] md:text-[14px] ${theme === 'light' ? arithmeticLightText : ''}`}>60</span>
                                </div>
                            </div>

                            {/* Interest Rate (P.A.)(yearly) */}
                            <div className='col-span-1 flex flex-col gap-[20px]'>
                                <div className='flex justify-between'>
                                    <label
                                        htmlFor="interestRate"
                                        className={`block mb-1 text-[12px] md:text-[14px] 
                                        ${theme === 'light' ? arithmeticLightText : ''}`}
                                    >
                                        Interest rate* (P.A.)
                                    </label>
                                    <div className='bg-[white] rounded-md px-[16px] py-1'>
                                        <p className={`text-[12px] md:text-[14px] text-[black]`}>{interestRate}</p>
                                    </div>

                                </div>
                                <div className='flex items-center '>
                                    <input
                                        type="range"
                                        min={10}
                                        max={30}
                                        value={interestRate}
                                        onChange={handleInterestRateChange}
                                        className="w-full h-1 md:h-2 bg-[#898989] rounded-lg appearance-none cursor-pointer accent-[white]"
                                    />
                                </div>
                                <div className='flex justify-between text-[#ADADAD]'>
                                    <span className={` text-[12px] md:text-[14px] ${theme === 'light' ? arithmeticLightText : ''}`}>10 %</span>
                                    <span className={`  text-[12px] md:text-[14px] ${theme === 'light' ? arithmeticLightText : ''}`}>30 %</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex md:flex-row flex-col gap-2 md:gap-[100px] items-center md:px-[20px] py-[14px]  bg-opacity-10'>
                            <div className="flex md:gap-[60px] text-[12px] md:text-[14px]">
                                <div className="text-opacity-70">
                                    <p className={`mb-1 ${theme === 'light' ? arithmeticLightText : ''}`}>
                                        • Principal Loan Amt.
                                    </p>
                                    <p className={`${theme === 'light' ? arithmeticLightText : ''}`}>₹{loanAmount}</p>
                                </div>
                                <div className="">
                                    <p className={`mb-1 ${theme === 'light' ? arithmeticLightText : ''}`}>
                                        • Interest Amount
                                    </p>
                                    <p className={`${theme === 'light' ? arithmeticLightText : ''}`}>₹{calculateInterestAmount()}</p>
                                </div>
                                <div className="">
                                    <p className={`mb-1 ${theme === 'light' ? arithmeticLightText : ''}`}>
                                        • Payable Amount
                                    </p>
                                    <p className={`font-semibold text-[16px] md:text-[20px] ${theme === 'light' ? arithmeticLightText : ''}`}>₹{payableAmount}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmiCalculator;