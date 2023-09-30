import React from 'react'
import img1 from "../../Image/service/entertainment and hospitality 1.png"

// import imgg from "./img1.png"
const Service = () => {
    const imgSet = [
        {
            id: 1,
            src: img1
        },
        {
            id: 2,
            src: img1
        },
        {
            id: 3,
            src: img1
        },
        {
            id: 4,
            src: img1
        },
        {
            id: 5,
            src: img1
        },
        {
            id: 6,
            src: img1
        },
        {
            id: 7,
            src: img1
        },
        {
            id: 8,
            src: img1
        },
        {
            id: 9,
            src: img1
        },
        {
            id: 12,
            src: img1
        },
        {
            id: 10,
            src: img1
        },
        {
            id: 11,
            src: img1
        },
    ]
    return (
        <div className=" bg-services-main mt-10">
            <div className=" flex  justif-center flex-col items-center mt-2.5 w-full space-y-11 ">
                <div className='w-3/4 flex flex-col items-center'>
                    <p className=' text-3xl font-bold text-themeColor-secondary mt-5'>Our<span className='text-themeColor-main'> Services</span></p>
                    <p className='text-sm w-3/4 text-center mt-3'>
                        We have immense pleasure in introducing ourselves as Security professionals for Guarding offices, Solar O&M,Road projects,National Highways,Factories,Hotels and industrial estates, and other properties in and around the cities of karnataka. We, KARTHIK SECURITY SERVICES(KSS) are proud to say that all our clients are satisfied with the security services .Our Security personnel are well-trained by Ex-Army Instructors.



                    </p>
                </div>

                <div className='flex  flex-wrap  w-full'>
                    {imgSet.map((item) => {
                        return <div key={item.id} className='basis-1/4 flex ml-5 mr-5 mt-10 flex-1'>
                            <img src={item.src} alt='hello' className='w-full h-full' />
                        </div>
                    })}
                </div>

            </div>
        </div>
    )
}

export default Service