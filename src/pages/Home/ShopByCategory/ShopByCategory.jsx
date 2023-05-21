import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ShopTabs from './shopTabs';

const ShopByCategory = () => {
    const toydata = useLoaderData()
    // const [categoryData, setCategoryData] = useState([])
    const uniqueSubCategories = [...new Set(toydata.map((toy) => toy.subCategory))];
    
   

    return (
        <div>
            <Tabs>
            <TabList className='md:flex gap-8 justify-center border-b-2 border-green-800 '>
                {
                    uniqueSubCategories.map((uniqueSub,i) => <Tab className='border-b-2 p-3 md:px-5 text-xl font-semibold border-b-green-800 rounded-t-xl bg-green-100 text-green-900 hover:bg-green-400 hover:text-white cursor-pointer border-y' key={i}>{uniqueSub}</Tab>)
                }
                
                </TabList>
                {
                    uniqueSubCategories.map((uniqueSub,i) => <TabPanel key={i}><ShopTabs  uniqueSub={uniqueSub} toydata={toydata}></ShopTabs></TabPanel>)
                }
                
                
            </Tabs>
        </div>
    );
};

export default ShopByCategory;