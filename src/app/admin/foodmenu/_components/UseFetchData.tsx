//  'use client'

// import { useAuth } from "@clerk/nextjs";
// import { useEffect, useState } from "react";

//  type CategoryType = {
//     categoryName: string;
//     _id: string;
//  };

//  export function useAuthFetch(path: string){
//   const [data, setData] = useState<CategoryType[]>([]);
//   const {getToken} = useAuth();

//   async function getFetchData(){
//     const token = await getToken();

//     fetch(`${process.env.NEXT_PUBLIC_URL}/${path}`, {
//        headers: {
//         authentication: token,
//        }
//     })
//      .then(res => res.json())
//      .then(data => setData(data))
//     }
    
//   useEffect(() => {
//       getFetchData();
//     }, []);

//     return( data );
// }