import FloatingWhatsAppBtn from "@/components/FloatingWhatsAppBtn";
import HeroFold from "@/components/HeroFold";
import RealityConnection from "@/components/RealityConnection";
import ConsequenceWarning from "@/components/ConsequenceWarning";
import IndustryEnemy from "@/components/IndustryEnemy";
import MechanismSolution from "@/components/MechanismSolution";
import SecurityAftersales from "@/components/SecurityAftersales";
import DirectServices from "@/components/DirectServices";
import ObjectionsKiller from "@/components/ObjectionsKiller";
import FinalCTABlock from "@/components/FinalCTABlock";

export default function Home() {
  return (
    <main className="w-full flex-col flex items-center justify-start overflow-x-hidden">
      <HeroFold />
      <RealityConnection />
      <ConsequenceWarning />
      <IndustryEnemy />
      <MechanismSolution />
      <SecurityAftersales />
      <DirectServices />
      <ObjectionsKiller />
      <FinalCTABlock />
      
      <FloatingWhatsAppBtn />
    </main>
  );
}
