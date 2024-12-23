import React from "react";
import { CoursesSection } from "@/app/_components/CoursesSection";
import HomeBanner from "./_components/HomeBanner";
import WorkshopSection from "./_components/WorkshopSection";
import AssociationsSection from "./_components/AssociationsSection";
import Testimonials from "./_components/Testimonials";
import IntroductionSection from "./_components/IntroductionSection";



export default function Home() {
  return (
    <>
      <HomeBanner />

      {/* courses section */}
      <CoursesSection />
      <WorkshopSection />
      <Testimonials />
      <AssociationsSection />

      <IntroductionSection />
    </>
  );
}
