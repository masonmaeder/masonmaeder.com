import type { Metadata } from "next";
import ExperienceContent from "@/components/ExperienceContent";

export const metadata: Metadata = {
  title: "Experience | Mason Maeder",
  description: "My professional experience, work history, and education",
};

export default function Experience() {
  return <ExperienceContent />;
}
