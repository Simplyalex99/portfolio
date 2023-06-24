type MottoContent = {
  title: string;
  subheading: string;
  description: string;
  color: string;
  background: string;
};
declare module '*.yaml' {
  const yaml: {
    heroSection: { heading: string; subheading: string };
    skillSection: {
      description: string;
      content: Array<{ title: string; description: string; imageUrl: string }>;
    };
    mainSection: {
      subheading: string;
      heading: string;
      headingAccent: string;
      description: string;
      images: Array<string>;
    };
    workSection: {
      content: Array<{
        title: string;
        accent: string;
        text: string;
        description: string;
        imageUrl: string;
        linkUrl: string;
      }>;
    };
    mottoSection: {
      content: Array<MottoContent>;
    };
    storySection: {
      content: Array<{
        title: string;
        description: string;
        imageUrl: string;
      }>;
    };
  };
  export default yaml;
}
