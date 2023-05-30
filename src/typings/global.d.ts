declare module '*.yaml' {
  const yaml: {
    heroSection: { heading: string; subheading: string };
    skillSection: {
      description: string;
      content: Array<{ title: string; description: string }>;
    };
    projectSection: { content: Array<{ title: string; description: string }> };
  };
  export default yaml;
}
