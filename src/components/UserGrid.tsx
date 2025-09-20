'use client';

import { deleteUser, getUsers } from "@/data/http.services";
import { Users } from "@/shared/model/User.model";
import { setUserData } from "@/shared/Slices/UserSlice";
import { Button, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const UserGrid=()=>{
    const router = useRouter();
    const [usersData, setUsersData] = useState<Users[]>([]);
    useEffect(()=>{
      getUsers().then((data) => setUsersData(data));
    },[])
      const dispatch = useDispatch();
      
    const onViewClick = (user: Users) => {
        dispatch(setUserData(user))
    router.push('/users/view')
    }
     const onDeleteClick = async (user: Users) => {
        await deleteUser(user.id)
    }
    
    const onUpdateClick = (user: Users) => {
        dispatch(setUserData(user))
       router.push('/users/update')
    }
     return (
        <>
            <section className="flex flex-col justify-center items-start p-10">
                <Button variant="outlined" onClick={() => router.push("/users/create")}>CreateUser </Button>
                <TableContainer component={Paper} className="border border-blue-400 rounded-md p-5 m-5 w-[90%]">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Phone</TableCell>
                                <TableCell align="center">Website</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                             usersData.map((data,index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell align="center">{data.name}</TableCell>
                                            <TableCell align="center">{data.email}</TableCell>
                                            <TableCell align="center">{data.phone}</TableCell>
                                            <TableCell align="center">{data.website}</TableCell>
                                            <TableCell className="flex flex-row justify-center items-center gap-5">
                                                <Button variant="outlined"  onClick={() => onViewClick(data)}>view</Button>
                                                <Button variant="outlined" onClick={()=>onUpdateClick(data)}>Update</Button>
                                                <Button variant="outlined" onClick={()=>onDeleteClick(data)}>Delete </Button>
                                            </TableCell>

                                        </TableRow>
                                    )
                                })
                            }

                        </TableBody>
                    </Table>
                </TableContainer>
            </section>

        </>
    );
}
export default UserGrid;