import { Causes3 } from "@/components/Causes";
import { Cta1 } from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@/layout/DanboxLayout";

const CausesPage = () => {
  return (
    <DanboxLayout>
      <PageBanner pageName="Our Causes" />
      <Causes3 />
      <Cta1 />
    </DanboxLayout>
  );
};

export default CausesPage;
