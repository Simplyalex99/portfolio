declare module '*.yaml' {
  const yaml: {
    heroSection: { heading: string; subheading: string };
    skillSection: {
      description: string;
      content: Array<{ title: string; description: string; imageUrl: string }>;
    };
    projectSection: {
      content: Array<{
        title: string;
        description: string;
        imageUrl: string;
        linkUrl: string;
        type: string;
      }>;
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
      content: Array<{
        title: string;
        subheading: string;
        heading: string;
      }>;
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
