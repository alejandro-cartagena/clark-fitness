import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import AppFeatures from "@/components/sections/AppFeatures";
import Programs from "@/components/sections/Programs";
import Faq from "@/components/sections/Faq";
import MyTransformation from "@/components/sections/MyTransformation";
import Testimonials from "@/components/sections/Testimonials";
import WhyMe from "@/components/sections/WhyMe";
import Marquee from "@/components/sections/Marquee/Marquee";

// Different Versions of the Hero Section
import HeroV2 from "@/components/sections/Hero/HeroV2";

// Different Versions of the Why Me Section
import WhyMeV2 from "@/components/sections/WhyMe/WhyMeV2";

// Different Versions of the Features Section
import FeaturesV2 from "@/components/sections/Features/FeaturesV2";

// Different Versions of the App Features Section
import AppFeaturesV2 from "@/components/sections/AppFeatures/AppFeaturesV2";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <HeroV2 /> */}
      <WhyMe />
      {/* <WhyMeV2 /> */}
      {/* <Features /> */}
      <FeaturesV2 />
      <AppFeatures />
      {/* <AppFeaturesV2 /> */}
      <About />
      <MyTransformation />
      {/* <Marquee /> */}
      <Testimonials />
      {/* <Programs /> */}
      <Faq />
    </div>
  );
}
