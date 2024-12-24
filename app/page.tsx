import React from "react";
import { CoursesSection } from "@/app/_components/CoursesSection";
import HomeBanner from "./_components/HomeBanner";
import WorkshopSection from "./_components/WorkshopSection";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <React.Fragment>
      <HomeBanner />
      <CoursesSection />
      <WorkshopSection />
      <Testimonials />
    </React.Fragment>
  );
}
