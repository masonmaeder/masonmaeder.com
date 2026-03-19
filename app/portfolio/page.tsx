import type { Metadata } from "next";
import PortfolioContent from "@/components/PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio | Mason Maeder",
  description: "Showcase of my software engineering and healthcare tech projects",
};

export default function Portfolio() {
  return <PortfolioContent />;
}
