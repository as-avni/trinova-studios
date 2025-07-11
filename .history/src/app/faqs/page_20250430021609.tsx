export default function Home() {
    return (
        <main className="min-h-screen bg-[#f8fbfd]" ref={sectionsRef}>
          {/* Scroll progress indicator */}
          <div className="fixed top-0 left-0 z-50 h-1 w-0 bg-[#0078AA]" id="scroll-progress"></div>
    
          <Navbar />
          <AboutHeader />
          {/* <HeroSection /> */}
          <SoftnessSection />
          <WhyYouNeed />
          <ProductVariation />
          <Features />
          <HowItWorks />
          <Comparison />
          <Testimonial />
          
          <ContactUs />
          <Footer />
        </main>
      )
    }