/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { 
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'cdn.noitatnemucod.net',
        },
        {
            protocol: 'https',
            hostname: 'fmcdn.mangahere.com',
        },
        ],
    } 
};

export default nextConfig;
