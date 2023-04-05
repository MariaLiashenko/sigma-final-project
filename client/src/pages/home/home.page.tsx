import { FC } from "react";
import {
  About,
  Eco,
  Gallery,
  PreviewBanner,
  News,
  Newsletter,
  Offer,
  Testimonial,
  Categories,
  Footer,
  Organic,
} from "../../components";

const HomePage: FC = () => (
  <>
    <PreviewBanner />
    <Offer />
    <About />
    <Categories />
    <Testimonial />
    <Organic />
    <Eco />
    <Gallery />
    <News />
    <Newsletter />
    <Footer />
  </>
);

export { HomePage };
