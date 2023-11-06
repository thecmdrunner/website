import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		appDir: true,
		mdxRs: true,
	},
	async redirects() {
		return [
			// {
			// 	source: '/',
			// 	destination: 'https://bio.link/thecmdrunner',
			// 	permanent: false,
			// },
		]
	},
};

export default withContentlayer(nextConfig);
