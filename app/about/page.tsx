import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About | Mason Maeder",
  description:
    "Learn more about Mason Maeder - Software Engineer, CS graduate, and national champion curler",
};

export default function About() {
  return <AboutContent />;
}
