import React from '../Icons/React'
import Tailwind from '../Icons/Tailwind'
import Next from '../Icons/Next'
import Vercel from '../Icons/Vercel'


export default function PortfolioArticle() {
    return (
        <>
            <div className="snap-start shrink-0 grid h-screen">
                <h2 className="uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl">
                    Portfolio
                </h2>
                <p>
                    28.04.23
                </p>
                <p>
                    My final task at Dev Academy was to create and deploy this website. A place to showcase my work as I turn my eye to employment. I took this as an opportunity to fully modernise my stack by learning and adding Tailwind, Next.js & deploying with Vercel. Isn&apos;t that what all the cool kids are doing these days? 
                </p>
                <div className='flex place-items-center'>
                    <React />
                    <Tailwind />
                    <Next />
                    <Vercel />
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate neque expedita tempora doloremque, omnis illo vero maiores, quia, ipsum iste tenetur libero dignissimos mollitia. Dignissimos maiores doloribus commodi provident deleniti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur deleniti quo distinctio nihil quaerat tempora delectus officiis pariatur atque, exercitationem earum! At corporis quidem nulla itaque vitae voluptate alias suscipit?
                </p>
            </div>
        </>
    )
}