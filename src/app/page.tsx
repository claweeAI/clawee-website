import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { PainPoints } from "@/components/pain-points";
import { Services } from "@/components/services";
import { AiTutoring } from "@/components/ai-tutoring";
import { UseCases } from "@/components/use-cases";
import { Audience } from "@/components/audience";
import { AuditCta } from "@/components/audit-cta";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <AiTutoring />
        <UseCases />
        <Audience />
        <AuditCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
