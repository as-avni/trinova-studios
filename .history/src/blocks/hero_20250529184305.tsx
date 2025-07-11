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


        </div>
        </section>
    );
}