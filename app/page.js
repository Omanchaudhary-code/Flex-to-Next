import Hero from '@/components/Hero';
import About from '@/components/About';
import Process from '@/components/Process';
import Products from '@/components/Products';
import Impact from '@/components/Impact';
import WhyUs from '@/components/WhyUs';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Process />
            <Products />
            <Impact />
            <WhyUs />
            <CTA />
            <Contact />
        </>
    );
}
