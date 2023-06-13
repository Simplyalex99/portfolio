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
  };
  export default yaml;
}
