/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  // async rewrites(){
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: 'http://10.4.7.61:8080/:path*'
  //     }
  //   ]
  // }
}

module.exports = nextConfig
