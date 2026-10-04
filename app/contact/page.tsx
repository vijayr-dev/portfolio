import type { Metadata } from "next";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact | Divyansh Rathore",
  description: "Connect with Divyansh Rathore on LinkedIn, Instagram, or YouTube.",
  openGraph: { title: "Contact | Divyansh Rathore", description: "Connect with Divyansh Rathore.", type: "website" },
};

export default function ContactPage() {
  return <Contact />;
}
