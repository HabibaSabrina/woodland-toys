import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-green-100 p-10 rounded-xl my-20'>
            <div>
            <h1 className="text-5xl font-bold text-center text-green-900 my-10">Blogs</h1>
            <div className="bg-sky-200 p-10 rounded-xl">
            <div className="bg-white p-8 m-5 rounded-xl">
                <h1 className="text-3xl font-bold text-green-800">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p className=" text-xl p-5">In token-based authentication, access tokens are used to grant an application access to an API. After a user successfully authenticates and grants access, the application obtains an access token. It then uses the access token as a credential when it makes a request to the target API.</p>
                <p className=" text-xl p-5">A special token called a refresh token is used to get additional tokens. This enables you to have temporary access tokens without having to collect credentials every time one expires.</p>
                <p className=" text-xl p-5">A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.</p>
                <p className=" text-xl p-5">We should store refresh token and access token in local storage or httpOnly cookies on the client side</p>
            </div>
            <div class="bg-white p-8 m-5 rounded-xl">
                <h1 class="text-3xl font-bold text-green-800">2. Compare SQL and NoSQL databases.</h1>
                <p class="text-center text-2xl mt-10 font-semibold">Differences between SQL and NoSQL databases</p>
                <table class="text-center border-2 border-green-700 md:w-10/12 mx-auto my-5 text-ellipsis	">
                    <tr class="border-2 border-green-700">
                        <th class="text-xl border-2 border-green-700">SQL</th>
                        <th class="text-xl border-2 border-green-700">NoSQL</th>
                    </tr>
                    <tr class="border-2 border-green-700">
                        <td class="border-2 border-green-700 p-3">Vertically scalable</td>
                        <td class="border-2 border-green-700 p-3">Horizontally scalable</td>
                    </tr>
                    <tr class="border-2 border-green-700">
                        <td class="border-2 border-green-700 p-3">Databases are table-based</td>
                        <td class="border-2 border-green-700 p-3">Databases are document, key-value, graph, or wide-column stores</td>
                    </tr>
                    <tr class="border-2 border-green-700">
                        <td class="border-2 border-green-700 p-3">Better for multi-row transactions</td>
                        <td class="border-2 border-green-700 p-3">Better for unstructured data like documents or JSON</td>
                    </tr>
                    
                </table>
            </div>
            <div className="bg-white p-8 m-5 rounded-xl">
                <h1 className="text-3xl font-bold text-green-800">3. What is express js? What is Nest JS?</h1>
                <p className=" text-xl p-5">The most well-liked Node.js web framework is Express.js. It has been referred to as the de facto standard server framework for Node.js and It is designed for building web applications and APIs </p>
                <p className=" text-xl p-5">NestJS is a progressive Node. js framework for building efficient, reliable, and scalable server-side applications.</p>
            </div>
            <div className="bg-white p-8 m-5 rounded-xl">
                <h1 className="text-3xl font-bold text-green-800">4. What is MongoDB aggregate and how does it work?</h1>
                <p className=" text-xl p-5">Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
                <p className=" text-xl p-5">Aggregation pipelines are collections of stages that, combined with the MongoDB query syntax, will allow you to obtain an aggregated result.</p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Blogs;