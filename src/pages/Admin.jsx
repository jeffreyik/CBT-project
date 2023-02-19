import { Outlet } from "react-router-dom";
import React from "react";
import AdminBar from "../components/AdminBar";

const Admin = () => {
    return (
        <React.Fragment>
            <div className='flex'>
                <AdminBar/>
                <div className='pl-10 pt-10 ml-[250px] mr-[100px] w-[100%]'>
                <Outlet/>
                </div>
            </div>
        </React.Fragment>
        
    )
}

export default Admin;