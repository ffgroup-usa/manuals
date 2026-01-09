/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  manual: [
    'intro',
    'supported-cameras',
    {
      type: 'category',
      label: 'Camera Installation',
      items: [
        'camera-installation/camera-installation-overview',
        'camera-installation/camera-mounting',
        'camera-installation/power-storage',
      ],
    },
    {
      type: 'category',
      label: 'Installation',
      items: [
        'installation/installation-install-cammra-ai',
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      items: [
        'configuration/configuration-recognition-setup',
      ],
    },
    {
      type: 'category',
      label: 'Integration',
      items: [
        'integration/integration-overview',
      ],
    },
    {
      type: 'category',
      label: 'Lists',
      items: [
        'lists/lists-managing-lists',
      ],
    },
    {
      type: 'category',
      label: 'Barrier Control',
      items: [
        'barrier-control/barrier-control-overview',
      ],
    },
    {
      type: 'category',
      label: 'Appendix',
      items: [
        'appendix/appendix-images',
      ],
    },
  ],
};

module.exports = sidebars;
