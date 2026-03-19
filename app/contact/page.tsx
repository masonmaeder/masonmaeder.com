import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact | Mason Maeder",
  description:
    "Get in touch with me for software engineering opportunities and collaborations",
};

export default function Contact() {
  return <ContactContent />;
}
