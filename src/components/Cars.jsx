import carsBanner from '../assets/cars/cars-banner.jpg';
import cars from '../data/carsData.js';

function Cars() {
    return (
        <>
            
            <div>
                <img src={carsBanner} alt="Two prototype vehicles in the workshop" />
            </div>
            <main>
                <div className="page-center pb-8">
                    <h1>Our Cars</h1>
                    <p>Our mission is to create the most competitive Formula Student cars and take India to the podium of international student motorsports.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 page-center">
                    {cars.map((car, idx) => (
                        <div key={idx} className="bg-zinc-700 text-zinc-100 rounded-md flex flex-col border border-zinc-800">
                            <img
                                src={car.image}
                                alt={car.name}
                                className="w-full md:h-[400px] object-cover rounded-t-md"
                            />
                            <div className="flex flex-row justify-between items-center px-4 py-3 flex-1">
                                <div>
                                    <h3 className="font-bold">{car.name}</h3>
                                    <h4 className="text-zinc-400 text-lg">{car.year}</h4>
                                </div>
                                <button className="bg-zinc-600 hover:bg-zinc-500 transition duration-400 text-white font-bold mt-14 md:mt-22 md:py-2 md:px-4 py-2 px-2 rounded-md text-sm md:text-base ">Specs & Team</button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}

export default Cars;