import Content from "./content";
import FooterPurple from "./footerPurple";
import Header from "./header";
import People from "./people";

export default function Main() {
  return (
    <div className="h-full">
      <Header />
      <Content />
      <People />
      <FooterPurple />
    </div>
  );
}
