'use client';
import { Users } from "@/shared/model/User.model";
import { useSelector } from "react-redux";

const UserView=()=>{
 
    const userData:Users=useSelector((state:any)=>state.User)
    return(
        <>
        <section className="flex flex-col justify-center items-center">
                <div className="w-[50%] flex flex-col gap-5 border border-blue-400 p-5 m-5">
                    <span>Name:{userData.name}</span>
                    <span>Email:{userData.email}</span>
                    <span>Phone:{userData.phone}</span>
                    
                    <span>Website:{userData.website}</span>

                </div>
            </section>
        </>
    )
}
export default UserView;