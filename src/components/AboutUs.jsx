import bellaOnCourt from "../assets/about-us/bellatrix-on-court.jpg";
import athenaRender from "../assets/about-us/athena-render.png";
import events from "../data/timelineData.js";
import React, { useState, useEffect, useRef } from "react";

function useCounter(max, duration = 1000) {
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

function TimelineEvent({ event, index }) {
    const [isVisible, setIsVisible] = useState(false);
    const eventRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.2,
                rootMargin: '0px'
            }
        );

        if (eventRef.current) {
            observer.observe(eventRef.current);
        }

        return () => {
            if (eventRef.current) {
                observer.unobserve(eventRef.current);
            }
        };
    }, []);

    return (
        <div ref={eventRef} className="grid grid-cols-5 gap-4">
            <div 
                className={`col-span-3 flex justify-end transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
                }`}
            >
                {event.image && (
                    <img 
                        src={event.image} 
                        alt={event.event} 
                        className="hover:scale-105 transition-transform duration-300 w-full h-auto rounded-lg object-cover shadow-xl shadow-zinc-700" 
                    />
                )}
            </div>
            <div 
                className={`col-span-2 transition-all duration-1000 ease-out delay-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
                <h3 className="timeline-date pl-8">{event.year}</h3>
                <p className="text-md pl-8">{event.event}</p>
            </div>
        </div>
    );
}

function AboutUs() {
    return (
        <>
            <div>
                <img src={bellaOnCourt} alt="Bellatrix prototype on basketball court" />
            </div>
            <main>
                <div className="page-center">
                    <h1>About Us</h1>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 pb-10">
                        <p className="text-justify">Orion Racing India is a student run, non-profit racing team based in K. J. Somaiya School Of Engineering, Mumbai. Comprising of budding students from various branches of engineering, we develop, design and manufacture a formula style race car. We take part in national as well as international competitions organized by Formula SAE, most notably Formula Student Germany.</p>
                        <img src={athenaRender} alt="Athena Render" className="w-110 h-full rounded-md shadow-xl shadow-zinc-800" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-around text-center gap-20 md:gap-0 bg-zinc-50 text-zinc-900 sm:pt-10 md:pt-0 sm:mt-10 md:pt-2 sm:min-h-150 md:min-h-0 pb-10 md:pb-8 pt-8">
                    <div className="ribbon-element">
                        <h2>{useCounter(50, 1000)}</h2>
                        <p>team members</p>
                    </div>
                    <div className="ribbon-element">
                        <h2>{useCounter(16, 1000)}</h2>
                        <p>cars designed</p>
                    </div>
                    <div className="ribbon-element">
                        <h2>{useCounter(50, 1000)}</h2>
                        <p>awards won</p>
                    </div>
                    <div className="ribbon-element">
                        <h2>{useCounter(4, 1000)}</h2>
                        <p>national championships won</p>
                    </div>
                </div>
                <h2 className="text-center pt-16">Our History</h2>
                <div className="grid grid-cols-6 gap-0 pt-6 pb-20">
                    <div className="col-span-1 flex justify-end h-full relative w-6.5 md:w-20 border-white">
                        <svg className="top-0 left-1/2 -translate-x-1/2 rounded-full" width="4" height="100%" style={{ minHeight: '100%', height: '100%' }}>
                            <rect x="0" y="0" width="4" height="100%" className="fill-sky-200" />
                        </svg>
                    </div>
                    <div className="col-span-4 border-white pr-4">
                        <div className="flex flex-col gap-20">
                            {events.map((event, idx) => (
                                <TimelineEvent key={idx} event={event} index={idx} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default AboutUs