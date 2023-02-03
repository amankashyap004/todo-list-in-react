import React from "react";
import SmallBtn from "../../utils/SmallBtn";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

export default function UserProfile(props) {
   const auth = getAuth();
   const navigate = useNavigate();

   const handleClick = () => {
      signOut(auth)
         .then(() => {
            // console.log("Sign-out successful.");
            navigate("/");
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <main className="absolute top-20 right-4 bg-slate-700 px-6 py-6 rounded-md z-10">
         <section className="flex justify-center items-center flex-col">
            <div className="bg-blue-100 rounded-full flex justify-center items-center h-[6rem] w-[6rem]">
               <h1 className="text-[4rem] uppercase font-medium">{props.userName[0]}</h1>
            </div>
            <div className="py-4 px-8 my-4 flex justify-start items-center bg-sky-200 rounded">
               <div className="pr-2 text-blue-900">
                  <h2 className="font-bold">Your id:</h2>
                  <h2 className="font-bold">Name:</h2>
                  <h2 className="font-bold">Phone:</h2>
                  <h2 className="font-bold">Email:</h2>
                  <p></p>
               </div>
               <div className="text-blue-900">
                  <p className="font-medium text-xs">{props.userId}</p>
                  <p className="font-medium">{props.userName}</p>
                  <p className="font-medium">-</p>
                  <p className="font-medium text-sm">{props.userEmail}</p>
               </div>
            </div>
            <div className="flex justify-center items-center mt-2">
               <div onClick={handleClick}>
                  <SmallBtn text="Log out" bgColor="blue" />
               </div>
               <SmallBtn text="Delete" bgColor="red" />
            </div>
         </section>
      </main>
   );
}
