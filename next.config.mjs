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
        {
            protocol: 'https',
            hostname: 'mangadex.org',
        }
        ],
    } 
};

export default nextConfig;
