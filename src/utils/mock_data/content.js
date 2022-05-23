const installPlansContent = `
installPlans:
  - guided-install
`;

const configContent = `
id: generic-quickstart-id-1
slug: quickstart-slug
description: example description 
summary: example summary 
icon: logo.png
level: NEW_RELIC
authors:
  - New Relic
title: Generic Quickstart
keywords:
  - os
  - operating system

${installPlansContent}
`;

const configContentMissingFields = `
id: generic-quickstart-id-1
slug: quickstart-slug
description: example description 
icon: logo.png
level: NEW_RELIC 
authors:
  - New Relic
keywords:
  - os
  - operating system

${installPlansContent}
`;

const dashboardContent = {
  name: 'mock dashboard name',
  description: 'mock dashboard description',
};

const missingConfigOutput = {
  title: 'Generic Quickstart',
  summary: 'example summary',
};

const installPlansInput = ['guided-install'];

const documentationInput = [
  {
    name: 'Kamon installation docs',
    description:
      'Kamon is used to automatically instrument, monitor and debug distributed\nsystems.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n',
    url:
      'https://docs.newrelic.com/docs/integrations/open-source-telemetry-integrations/open-source-telemetry-integration-list/kamon-reporter',
  },
];

const documentationOutput = [
  {
    name: 'Kamon installation docs',
    description:
      'Kamon is used to automatically instrument, monitor and debug distributed\nsystems.',
    url:
      'https://docs.newrelic.com/docs/integrations/open-source-telemetry-integrations/open-source-telemetry-integration-list/kamon-reporter',
  },
];

const installPlansOutput = [
  {
    name: '',
    id: 'guided-install',
  },
];

const expectedConfigOutput = {
  title: 'Generic Quickstart',
  name: 'quickstart-slug',
  description: 'example description',
  packUrl:
    'https://github.com/newrelic/newrelic-quickstarts/tree/main/quickstarts/mock_quickstart_1',

  id: 'generic-quickstart-id-1',
  level: 'NEW_RELIC',
  logoUrl: 'fake/path/to/logo.png',
  summary: 'example summary',
  keywords: ['os', 'operating system'],
  authors: ['New Relic'],
  relatedResources: [],
  documentation: [],
  installPlans: installPlansOutput,
};

const baseFiles = (content) => [
  {
    type: 'yaml',
    filePath: 'mock_quickstart_1/config.yml',
    fileName: 'config.yml',
    content: content,
  },
  {
    type: 'image',
    filepath: 'mock_quickstarts_1/logo.png',
    fileName: 'logo.png',
    content: 'fake/path/to/logo.png',
  },
];

const dashboardFiles = (content) => [
  {
    type: 'json',
    filePath:
      'mock_quickstart_1/dashboards/custom_dashboard/mock_dashboard.json',
    fileName: 'mock_dashboard.json',
    content: JSON.stringify(content),
  },
  {
    type: 'image',
    filePath:
      'mock_quickstart_1/dashboards/custom_dashboard/mock_dashboard01.png',
    fileName: 'mock_dashboard01.png',
    content: 'mock/url/for/mock_dashboard01.png',
  },
  {
    type: 'image',
    filePath:
      'mock_quickstart_1/dashboards/custom_dashboard/mock_dashboard02.png',
    fileName: 'mock_dashboard02.png',
    content: 'mock/url/for/mock_dashboard02.png',
  },
];

const expectedDashboardOutput = [
  {
    name: 'mock dashboard name',
    description: 'mock dashboard description',
    screenshots: [
      'mock/url/for/mock_dashboard01.png',
      'mock/url/for/mock_dashboard02.png',
    ],
  },
];

module.exports = {
  installPlansContent,
  configContent,
  configContentMissingFields,
  dashboardContent,
  expectedConfigOutput,
  missingConfigOutput,
  baseFiles,
  dashboardFiles,
  expectedDashboardOutput,
  installPlansInput,
  installPlansOutput,
  documentationInput,
  documentationOutput,
};
