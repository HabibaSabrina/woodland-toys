import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ProtectAnimal = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
       <div className=' my-10 bg-green-50 p-10'>
            <h1 className='text-center text-green-700 my-10 text-3xl font-bold'>Help Wild Animals</h1>
            <div className='grid md:grid-cols-3 gap-10'>

                <div>

                    <div data-aos='fade-right'>
                        <p className='text-2xl font-semibold my-3 text-green-800'>Plant native species</p>
                        <p>Creating planet- and wildlife-friendly environments can start right in your own backyard and in your community. Plant native species of trees, bushes, and plants, especially those that flower and provide food sources for wild animals.</p>
                    </div>
                    <div data-aos='fade-right'>
                        <p className='text-2xl font-semibold my-3 text-green-800'>Help the zoo or aquarium</p>
                        <p>Zoos and aquariums often have wildlife conservation efforts. Find out how you can volunteer to help spread the word about or work to support wild animals through the Association of Zoo Docents and Volunteers.</p>
                    </div>
                </div>
                <div>
                    <img src="/giraf.png" alt="" />
                </div>
                <div>
                    <div data-aos='fade-left'>
                        <p className='text-2xl font-semibold my-3 text-green-800'>Avoid harmful chemicals</p>
                        <p>In our efforts to spur lawn growth and control pests, we may turn to chemical solutions, which can be very harmful to wildlife like bees and butterflies that are helpful to the environment.</p>
                    </div>
                    <div data-aos='fade-left'>
                        <p className='text-2xl font-semibold my-3 text-green-800'>Pick up trash </p>
                        <p >Picking up trash not only protects the environment and keeps our surroundings beautiful, but it can also save wildlife. Plastic bags and twine can easily trap birds and other smaller animals, hurting or killing them or making them easy prey.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProtectAnimal;