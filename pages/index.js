import Meta from "@components/partials/seo-meta";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

// Components
import Header from "@components/Header";
import Hero from "@components/Hero";
import Footer from "@components/Footer";
import SPSignUp from "@components/Sections/SPSignUp"
import Feedbacks from "@components/Feedbacks"
import Explainer from "@components/Explainer"
import Essential from "@components/Essential"
import Category from "@components/Category"
import Widget from "@components/Sections/Widget"

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <>
      <Meta title={t("title")} desc={t("description")} />
      
      <div className="font-body">
        <Header />

        <Widget/>

        <Hero/>

        <Essential/>

        <Category/>

        <Explainer/>

        <Feedbacks/>

        <SPSignUp/>

        <Footer/>
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common","header","hero","category","essential","explainer","feedbacks","footer","spsignup"])),
  },
});
