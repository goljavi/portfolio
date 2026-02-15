import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    htmlLimitedBots: /.*/,
    experimental: {
        optimizePackageImports: ['lucide-react'],
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);