export default {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    config.build = config.build || {};
    config.build.rollupOptions = config.build.rollupOptions || {};
    const originalOnWarn = config.build.rollupOptions.onwarn;
    config.build.rollupOptions.onwarn = (warning, warn) => {
      if (warning.code === 'EVAL' && warning.id?.includes('@storybook')) return;
      if (originalOnWarn) originalOnWarn(warning, warn);
      else warn(warning);
    };
    return config;
  }
};
