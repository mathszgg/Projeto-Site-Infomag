"use client";

import Image from "next/image"
import CallButtons from "../CallButtons";

type WidgetProps = {
    imgUrl: string;
    title: string;
    services: string[];
}

const ServicesWidget = ({ imgUrl, title, services }: WidgetProps) => {
    return (
        <div className="px-2 pt-5 pb-4 bg-gray-50 shadow-xl shadow-gray-400 rounded-xl flex flex-col items-center h-full text-black">
            <div className="w-full">
                <Image 
                    src={imgUrl}
                    alt="Repair Equipament Image"
                    width={400}
                    height={400}
                    className="aspect-square m-auto w-11/12 rounded-md border-2 border-gray-600"
                />
            </div>
            <div className="flex flex-col justify-center items-center mt-5">
                <h1 className="text-4xl font-bold text-center">{title}</h1>
                <Image 
                    src={'/img/page/services-widget/tool.svg'}
                    alt="Tool Image"
                    width={50}
                    height={50}
                />
            </div>
            <div className="mt-10 pl-7 w-full flex-grow">
                <ul>
                    {services.map((item) => 
                        <li className="list-disc list-inside text-lg font-bold text-gray-700" key={item}>{item}</li>
                    )}
                </ul>
            </div>
            <div>
                <CallButtons />
            </div>
        </div>
    )
}

export default ServicesWidget;