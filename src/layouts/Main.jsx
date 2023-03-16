import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';

//components
import Nav from '../components/Nav';

//helper function
import { fetchData } from '../helper';

//loader
export function mainLoader(){
    const userName = fetchData("userName");
    return {userName}
}

const Main = () => {
const { userName } = useLoaderData();


    return (
    <div className='layout'>
    <Nav userName={userName} />
    <main>
        <Outlet />
    </main>
    </div>
    )
}

export default Main;
