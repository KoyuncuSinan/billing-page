import Image from "next/image";
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import Link from "next/link";

export default function Main(){
return(
    <div>
        <section className="max-w-[60%] grid grid-cols-5 mx-auto h-[40rem] mt-[9rem] relative z-10">
        <section className="col-span-1 bg-[#F8F8FF] text-[#62618F]">
        <div className="w-[70%] mx-auto">
            <div className="flex flex-row items-center justify-center mt-10">
                <Image src="/IMG_8955.jpg" width={200} height={200} className="rounded-xl object-cover w-[3rem] h-[3rem]"/>
                <span className="text-xs ml-2">
                    <h3 className="text-[#1A194D] font-bold">Sinan Koyuncu</h3>
                    <p>@sinan-koyuncu</p>
                </span>
            </div>
            <ul className="text-sm mt-10">
                <li className="flex flex-row mb-5 hover:text-[#1A194D] hover:border-l-4 hover:border-[#EE4D38] px-1 hover:cursor-pointer">
                <CropSquareOutlinedIcon />
                <p className="ml-2 ">General</p>
                </li>

                <li className="flex flex-row mb-5 hover:text-[#1A194D] hover:border-l-4 hover:border-[#EE4D38] px-1 hover:cursor-pointer">
                <LockOutlinedIcon />
                <p className="ml-2">Password</p>
                </li>

                <li className="flex flex-row mb-5 hover:text-[#1A194D] hover:border-l-4 hover:border-[#EE4D38] px-1 hover:cursor-pointer">
                <EmailOutlinedIcon />
                <p className="ml-2">Invitations</p>
                </li>

                <li className="flex flex-row mb-5 hover:text-[#1A194D] hover:border-l-4 hover:border-[#EE4D38] px-1 hover:cursor-pointer">
                <PaymentsOutlinedIcon />
                <p className="ml-2">Billing</p>
                </li>

                <li className="flex flex-row mb-5 hover:text-[#1A194D] hover:border-l-4 hover:border-[#EE4D38] px-1 hover:cursor-pointer">
                <AppsOutlinedIcon />
                <p className="ml-2">Apps</p>
                </li>

                <li className="flex flex-row mt-64 hover:font-[#1A194D] hover:border-l-4 hover:border-[#EE4D38] px-1 hover:cursor-pointer">
                <ExitToAppOutlinedIcon />
                <p className="ml-3">Log Out</p>
                </li>
            </ul>
        </div>
        </section>

        <section className="grid grid-cols-3 col-span-4 bg-white">
            <section className="col-span-2  ">
            <div className="text-[#1A194D] max-w-[85%] mx-auto mt-10">
                <h3 className="mb-10 font-bold text-2xl">Billing</h3>
                <h4 className="font-semibold text-sm">Order History</h4>
                <p className="text-xs text-[#62618F] mb-8">Manage billing information and view receips</p>
                <ul className="text-[#1A194D] font-medium ">
                    <li className="grid grid-cols-3  text-[#62618F] text-xs mb-4">
                        <span>Date</span>
                        <span>Type</span>
                        <span>Receipt</span>
                    </li>
                    <li className="grid grid-cols-3  text-sm hover:shadow-lg py-2 items-center">
                        <span>Oct. 21, 2022</span>
                        <span>Pro Annual</span>
                        <span className="border-[1px] border-[#CBCBD9] py-1 px-2 rounded-lg max-w-[50%] text-center hover:cursor-pointer hover:bg-[grey] hover:text-white">Download</span>
                    </li>
                    <li className="grid grid-cols-3 text-sm hover:shadow-lg py-2 items-center">
                    <span>Aug. 21, 2022</span>
                    <span>Pro Portfolio</span>
                    <span className="border-[1px] border-[#CBCBD9] py-1 px-2 rounded-lg max-w-[50%] text-center hover:cursor-pointer hover:bg-[grey] hover:text-white">Download</span>
                    </li>
                    <li className="grid grid-cols-3  text-sm hover:shadow-lg py-2 items-center">
                    <span>July. 21, 2022</span>
                    <span>Sponsored Post</span>
                    <span className="border-[1px] border-[#CBCBD9] py-1 px-2 rounded-lg max-w-[50%] text-center hover:cursor-pointer hover:bg-[grey] hover:text-white">Download</span>
                    </li>
                    <li className="grid grid-cols-3 text-sm hover:shadow-lg py-2 items-center">
                    <span>Jun. 21, 2022</span>
                    <span>Sponsored Post</span>
                    <span className="border-[1px] border-[#CBCBD9] py-1 px-2 rounded-lg max-w-[50%] text-center hover:cursor-pointer hover:bg-[grey] hover:text-white">Download</span>
                    </li>
                </ul>
                <Link href={"/"} className="text-[#EE4D38] text-sm font-medium hover:underline">Load More</Link>
                <h4 className="mt-16 font-semibold text-sm">Payment Method</h4>
                <span className="text-[#62618F] text-xs">Manage billing information and view receips.</span>
                <div className="flex flex-row justify-between text-sm max-w-[82%]">
                    <div className="flex flex-row text-center mt-3 items-center">
                    <Image src="/Visa_2014.svg.png" width={60} height={50} className="object-fit p-1 border-[1px] border-[#CBCBD9] "/>
                    <span className="ml-3">Visa ending in 2255</span>
                    </div>
                    <button className="border-[1px] border-[#CBCBD9] px-2 rounded-lg max-w-[50%] text-center font-semibold hover:bg-[grey] hover:text-white">Remove</button>
                </div>
            </div>
            </section>
            <div className="col-span-1 bg-[#EE4D38] p-2 rounded-lg w-[13rem] mx-auto h-[12rem] mt-[7rem]">
            <div className="w-[85%] mx-auto my-5">
                <span className="text-xs">Your plan</span>
                <h4 className="font-medium text-xl mt-4">Pro Annual</h4>
                <span className="text-xs font-light">Renews on Nov. 2023</span>
                <div className="text-center">
                <button className="border-[1px] border-[#CBCBD9] p-2 text-xs mx-auto mt-4 rounded-md hover:bg-[white] hover:text-black">Cancel Subscription</button>
                </div>

            </div>
            </div>
        </section>
        </section>
        <section className="absolute inset-28 bg-[#EE4D38] z-0 w-[15rem] rounded-2xl ml-[12rem]" ></section>
    </div>
)
}