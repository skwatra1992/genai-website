import { SupportingContentText } from "../../components/PageSupportingContent";
import {
  navLinkStylesEnter,
  navLinkStylesLeave,
} from "../../components/Header";

const HomePageContent = (
  <SupportingContentText>
    Hello&#128075; My name is Amazon Bedrock, and I'm a fully managed service that delivers the power of large language models (also known as foundation models).
    <br />

    You can perform a variety of tasks using our pre-trained models, or customize a model to adapt it to your domain. I'm passionate about contributing to Open Source Software, designing
    accessible and easy-to-use Interfaces, and building a more equitable future for technologists.
    <br />
    <br />
    Learn more{" "}
    <a
      href="https://aws.amazon.com/bedrock/"
      target="_blank"
      rel="noreferrer"
      style={{
        color: "#748592",
        textDecoration: "underline",
        textDecorationColor: "#E6E6E6",
        fontWeight: "bold",
      }}
      onMouseEnter={(e) => {
        navLinkStylesEnter(e, "underline", "2px", "#525252", "#748492");
      }}
      onMouseLeave={(e) => {
        navLinkStylesLeave(e, "none", "#748492");
      }}
    >
      about me
    </a>{" "}
    {/* and the things I'm{" "}
    <a
      href="/projects"
      target="_blank"
      rel="noreferrer"
      style={{
        color: "#748592",
        textDecoration: "underline",
        textDecorationColor: "#E6E6E6",
        fontWeight: "bold",
      }}
      onMouseEnter={(e) => {
        navLinkStylesEnter(e, "underline", "2px", "#525252", "#748492");
      }}
      onMouseLeave={(e) => {
        navLinkStylesLeave(e, "none", "#748492");
      }}
    >
      working on
    </a> */}
    !
  </SupportingContentText>
);

export default HomePageContent;
