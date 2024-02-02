import path from'path';
import CopyPlugin from 'copy-webpack-plugin';
import { URL } from 'url';

const __filename = new URL('', import.meta.url).pathname;
const __dirname = new URL('.', import.meta.url).pathname;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: 'node_modules/leaflet/dist/images',
            to: path.resolve(__dirname, 'public', 'leaflet', 'images')
          },
        ],
      }),
    )
    return config
  }
};

export default nextConfig;
