import React from 'react';

const AddToys = () => {
    const handleAddToys = event => {
        event.preventDefault()
        const form = event.target;
        const toyName = form.toyName.value;
        const sellerEmail = form.sellerEmail.value;
        const price = form.price.value;
        const sellerName = form.sellerName.value;
        const subCategory = form.subCategory.value;
        const description = form.description.value;
        const ratings = form.ratings.value;
        const quantity = form.quantity.value;
        const toyPhoto = form.toyPhoto.value;
        const toy = {toyName, toyPhoto, sellerName, sellerEmail, subCategory, price, ratings, quantity, description}
        console.log(toy)
        fetch('http://localhost:5000/toys',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(toy)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                alert('toy is added successfully')
                form.reset();
            }
        })

    }
    return (
        <div>
            <img className='absolute w-52 left-28 top-96' src="/bearup.png" alt="" />
            <form onSubmit={handleAddToys} className='bg-sky-100 px-20 my-20 py-10 mx-44 rounded-xl'>
                <h1 className='text-center mb-20 text-3xl font-bold text-[#673c0b]'>Add a Toy</h1>
                <div className='grid grid-cols-2 gap-5'>
                    <div>
                        <p className='font-bold text-[#673c0b]'>Name</p>
                        <input className='  focus:outline-0  mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="text" name="toyName" required />
                    </div>
                    <div>
                        <p className='font-bold text-[#673c0b]'>Picture URL of the toy</p>
                        <input className='  focus:outline-0  mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="text" name="toyPhoto" required />
                    </div>
                    <div>
                        <p className='font-bold text-[#673c0b]'>Seller Name</p>
                        <input className='  focus:outline-0  mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="text" name="sellerName" required />
                    </div>
                    <div>
                        <p className='font-bold text-[#673c0b]'>Seller Email</p>
                        <input className='  focus:outline-0  mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="email" name="sellerEmail" required />
                    </div>

                    <div>
                        <p className='font-bold text-[#673c0b]'>Price</p>
                        <input className='  focus:outline-0  mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="text" name="price" required />
                    </div>
                    <div>
                        <p className='font-bold text-[#673c0b]'>Available Quantity</p>
                        <input className='  focus:outline-0  mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="number" name="quantity" required />
                    </div>
                    <div>
                        <p className='font-bold text-[#673c0b]'>Sub Category</p>
                        <select name='subCategory' defaultValue={'Choose a sub category'} className="select md:w-80 w-64 border-2 border-red-800 rounded-xl focus:outline-0 mt-5">
                            <option disabled value='Choose a sub category'>Choose a Sub Category</option>
                            <option value='Teddy bear'>Teddy bear</option>
                            <option value='Monkey'>Monkey</option>
                            <option value='Bird'>Bird</option>
                            <option value='Horse'>Horse</option>
                            <option value='Dinosaur'>Dinosaur</option>
                            <option value='Dogs'>Dog</option>
                            <option value='Cat'>Cat</option>
                            <option value='Cows'>Cow</option>
                        </select>
                    </div>
                </div>
                <div className='my-10'>
                    <p className='font-bold text-center text-[#673c0b]'>Detail Description</p>
                    <textarea name='description' className='focus:outline-0 mt-5 w-full p-5 border-2 border-red-800 rounded-xl'></textarea>
                </div>
                <div className='text-center'>
                    <p className='font-bold text-center text-[#673c0b] mb-5'>Ratings</p>
                    <div className="rating">
                        <input type="radio" name="ratings" className="mask h-14 w-14 bg-yellow-500 mask-star mask-green-100" value='1' />
                        <input type="radio" name="ratings" className="mask h-14 w-14 bg-yellow-500 mask-star" value='2'/>
                        <input type="radio" name="ratings" className="mask h-14 w-14 bg-yellow-500 mask-star" value='3' />
                        <input type="radio" name="ratings" className="mask h-14 w-14 bg-yellow-500 mask-star" value='4' />
                        <input type="radio" name="ratings" className="mask h-14 w-14 bg-yellow-500 mask-star" value='5' />
                    </div>
                </div>
                <div className='text-center'>
                <button className='bg-[#673c0b] w-64 rounded-full p-3 text-xl text-white font-semibold hover:bg- mt-10'>Add</button>

                </div>
            </form>
        </div>
    );
};

export default AddToys;