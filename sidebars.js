/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  manual: [
    'intro',
    'supported-cameras',
    {
      type: 'category',
      label: 'Camera Installation',
      items: [
        'camera-installation/overview',
      ],
    },
    {
      type: 'category',
      label: 'Installation',
      items: [
        'installation/install-cammra-ai',
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      items: [
        'configuration/recognition-setup',
      ],
    },
    {
      type: 'category',
      label: 'Integration',
      items: [
        'integration/overview',
      ],
    },
    {
      type: 'category',
      label: 'Lists',
      items: [
        'lists/managing-lists',
      ],
    },
    {
      type: 'category',
      label: 'Barrier Control',
      items: [
        'barrier-control/overview',
      ],
    },
    {
      type: 'category',
      label: 'Appendix',
      items: [
        'appendix/images',
      ],
    },
  ],
};
module.exports = sidebars;
