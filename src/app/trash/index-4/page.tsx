import { About3 } from "@/components/About";
import { Brand } from "@/components/Brand";
import { Causes3 } from "@/components/Causes";
import { Cta5 } from "@/components/Cta";
import { Donation1, Donation2 } from "@/components/Donation";
import { Gallery2 } from "@/components/Gallery";
import { HeroSlider3 } from "@/components/HeroSlider";
import { News4 } from "@/components/News";
import { Promo3 } from "@/components/Promo";
import { Testimonial3 } from "@/components/Testimonial";
import { Volunter } from "@/components/Volunter";
import DanboxLayout from "@/layout/DanboxLayout";

const Home4 = () => {
  return (
    <DanboxLayout header={4} footer={4}>
      <HeroSlider3 />
      <Promo3 />
      <About3 />
      <Donation1 />
      <Cta5 />
      <Causes3 />
      <Brand />
      <Gallery2 />
      <Donation2 />
      <Volunter />
      <Testimonial3 />
      <News4 />
    </DanboxLayout>
  );
};

export default Home4;
