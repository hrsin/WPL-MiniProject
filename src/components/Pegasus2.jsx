import pegasus2 from "../assets/pegasus-2/pegasus-2-team.jpg";
import React, { useState, useEffect } from "react";

function useCounter(max, duration) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let upto = 0;
        const intervalTime = duration / max;
        const interval = setInterval(() => {
            upto += 1;
            setCount(upto);
            if (upto === max) clearInterval(interval);
        }, intervalTime);
        return () => clearInterval(interval);
    }, [max, duration]);
    return count;
}

function Pegasus2() {
    return (
        <>
            <div className="w-full h-screen relative overflow-hidden">
                <img 
                    src={pegasus2} 
                    alt="Pegasus 2.0 prototype with the team at FS Austria" 
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-12 left-8 md:left-16">
                    <h1 className="text-6xl md:text-8xl font-light text-white drop-shadow-2xl tracking-wider">
                        Pegasus 2.0
                    </h1>
                </div>
            </div>
            
            <main className="text-zinc-50 bg-zinc-950">
                <div className="flex flex-col md:flex-row justify-around items-center text-center gap-12 md:gap-8 bg-orange-400 text-zinc-900 py-12 md:py-16 px-4">
                    <div className="flex flex-col items-center">
                        <div className="flex flex-row gap-2 justify-center items-baseline">
                            <h2 className="text-5xl md:text-6xl font-bold leading-none">{useCounter(113, 1000)}</h2>
                            <p className="text-xl md:text-2xl font-semibold">km/h</p>
                        </div>
                        <p className="text-lg md:text-xl font-medium mt-2 uppercase tracking-wide">Top Speed</p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                        <div className="flex flex-row gap-2 justify-center items-baseline">
                            <h2 className="text-5xl md:text-6xl font-bold leading-none">{useCounter(240, 10)}</h2>
                            <p className="text-xl md:text-2xl font-semibold">kg</p>
                        </div>
                        <p className="text-lg md:text-xl font-medium mt-2 uppercase tracking-wide">Weight</p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                        <div className="flex flex-row gap-2 justify-center items-baseline">
                            <h2 className="text-5xl md:text-6xl font-bold leading-none">{useCounter(5, 1000)}</h2>
                            <p className="text-xl md:text-2xl font-semibold">s</p>
                        </div>
                        <p className="text-lg md:text-xl font-medium mt-2 uppercase tracking-wide">0-60</p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                        <h2 className="text-5xl md:text-6xl font-bold leading-none">{useCounter(4, 1000)}</h2>
                        <p className="text-lg md:text-xl font-medium mt-2 uppercase tracking-wide">Awards Won</p>
                    </div>
                </div>
                
                <div className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-24">
                    <p className="text-lg md:text-xl leading-relaxed text-zinc-300">
                        Pegasus 2.0 was our 2024 prototype. It showcased our advancements in aerodynamics and lightweight materials.
                    </p>
                </div>
            </main>
        </>
    );
}

export default Pegasus2;