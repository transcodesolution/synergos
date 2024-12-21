import React from "react";
import { CoursesSection } from "@/lib/components/home/CoursesSection";
import HomeBanner from "@/lib/components/home/HomeBanner";
import WorkshopSection from "@/lib/components/home/WorkshopSection";
import TestimonialCard from "@/lib/components/home/TestimonialCard";

export default function Home() {
  return (
    <>
      <HomeBanner />

      {/* courses section */}
      <CoursesSection />
      <WorkshopSection />
      <TestimonialCard
        name="Ninou Dekker"
        profession="Fysiotherapeut"
        rating={5}
        testimonial="De haptonomieopleiding gaf mij handvatten om cliënten te helpen hun emoties en lichaamssignalen te leren herkennen en begrijpen. Ik werk nu op een dieper niveau met hen samen, wat het vertrouwen en de resultaten zichtbaar vergroot. Het was intensief en soms confronterend, maar absoluut de moeite waard. Deze opleiding heeft niet alleen mijn werk, maar ook mijn leven verrijkt."
      />
    </>
  );
}
