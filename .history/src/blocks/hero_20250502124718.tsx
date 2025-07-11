import React from "react";
import Image from "next/image";
import Link from "next/link"
// import ContactForm from "@/components/contact-form";
export default function AboutHeader() {
    return (
        <section className="relative bg-[#F5FAFE] bg-[url('/background/hero.png')] bg-cover+
        
        
        h-screen">
        <Image
            src="/background/landingPageWeb.png"
            height={512}
            width={1520}
            alt="landing page img"
            priority
            className="max-sm:hidden w-full aspect-auto"
        />
        <Image
            src="/background/landingPageMobile.png"
            height={800}
            width={800}
            alt="landing page img"
            priority
            className="sm:hidden object-cover"
        />

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center  gap-8 md:gap-12 px-6">
            <div className="flex flex-col items-start space-y-6 fade-in text-center md:text-left 2xl:mt-[-30%] 2xl:ml-[-40%]">
            <div className="">
                <h2 className="text-[#0078AA] font-poppins text-xl md:text-2xl pb-0 slide-in-left">Aquastori Softner</h2>
                <h1
                className="text-3xl leading-tight md:text-5xl lg:text-4xl pb-4 font-poppins slide-in-left"
                style={{ animationDelay: "0.1s" }}
                >
                Say Goodbye to Hard Water, Forever!
                </h1>
                <p className="mt- text-gray-700 md:text-xl slide-in-left pb-[-10%]" style={{ animationDelay: "0.2s" }}>
                Protect your home, skin, and appliances with the power of pure, <br /> softened water.
                </p>
            </div>
            <div className="slide-in-left" style={{ animationDelay: "0.3s" }}>
                <Link
                href="#contact"
                className="inline-flex items-center rounded-md bg-[#FF7A45] px-6 py-3 text-white transition-all hover:bg-[#FF7A45]/90 hover:shadow-lg hover:translate-y-[-2px]"
                >
                Get Softer Water Today
                </Link>
            </div>
            </div>
            <div className="relative flex items-center justify-center">
            <div className="relative z-10 float">
                <Image
                src="/assets/softner.png"
                alt="Aquastori Water Softener"
                width={400}
                height={600}
                className="h-[540px] max-w-full w-[110%] object-cover md:mt-[-30%] md:ml-[22%]"
                priority
                />
            </div>
            </div>
        </div>
        </section>
    );
}