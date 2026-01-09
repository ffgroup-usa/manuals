/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  manual: [
    'intro',
    'supported-cameras',

    {
      type: 'category',
      label: 'Camera Installation',
      collapsible: true,
      collapsed: false,
      items: [
        'camera-installation/camera-installation-overview',
        'camera-installation/camera-mounting',
        'camera-installation/power-storage',
      ],
    },

    {
      type: 'category',
      label: 'Installation',
      collapsible: true,
      collapsed: true,
      items: [
        'installation/installation-install-cammra-ai',
      ],
    },

    {
      type: 'category',
      label: 'Configuration',
      collapsible: true,
      collapsed: true,
      items: [
        'configuration/configuration-recognition-setup',
      ],
    },

    {
      type: 'category',
      label: 'Integration',
      collapsible: true,
      collapsed: true,
      items: [
        'integration/integration-overview',
      ],
    },

    {
      type: 'category',
      label: 'Lists',
      collapsible: true,
      collapsed: true,
      items: [
        'lists/lists-managing-lists',
      ],
    },

    {
      type: 'category',
      label: 'Barrier Control',
      collapsible: true,
      collapsed: true,
      items: [
        'barrier-control/barrier-control-overview',
      ],
    },

    {
      type: 'category',
      label: 'Appendix',
      collapsible: true,
      collapsed: true,
      items: [
        'appendix/appendix-images',
      ],
    },
  ],
};

module.exports = sidebars;
