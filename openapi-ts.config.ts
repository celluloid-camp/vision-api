import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
	input: 'https://vision.celluloid.me/openapi.json',
	output: {
		path: './client',
	},
	plugins: [
    '@hey-api/schemas',
    '@hey-api/client-fetch',
    {
      dates: true,
      name: '@hey-api/transformers',
    },
    {
      enums: 'javascript',
      name: '@hey-api/typescript',
    },
    {
      name: '@hey-api/sdk',
      transformer: true,
    },
  ],
});
