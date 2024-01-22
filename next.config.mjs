import million from "million/compiler";
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { dev: isDev, isServer }) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: /svgr/,
      use: ['@svgr/webpack'],
    });

    config.module.rules.push({
      test: /\.svg$/i,
      loader: 'next-image-loader',
      issuer: { not: /\.(css|scss|sass)$/ },
      dependency: { not: ['url'] },
      resourceQuery: { not: [/svgr/] },
      options: { isServer, isDev, basePath: '', assetPrefix: '' },
    });

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  experimental: {
    webpackBuildWorker: true
  },
};
 
const millionConfig = {
  auto: true,// if you're using RSC: auto: { rsc: true },
};
 
export default million.next(nextConfig, millionConfig);
