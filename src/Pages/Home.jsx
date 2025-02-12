import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-5 '>
            
            <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold text-gray-700">Vivek Sharma</h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <p>
                                        Hello! I'm Vivek Sharma, and I'm excited to showcase my work on this assignment. I have successfully developed two calculators: an Arithmetic Calculator and an EMI Calculator. This project demonstrates my skills in React, Tailwind CSS, and problem-solving. Below, you can find links to explore each calculator. I hope you enjoy them!
                                    </p>
                                </div>
                                <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                                    <p className="text-gray-900">Explore My Assignment:</p>
                                    <div className="mt-4 flex justify-center space-x-4">
                                        <Link to="/arithematic-calculator" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                            Arithmetic Calculator
                                        </Link>
                                        <Link to="/emi-calculator" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                            EMI Calculator
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home