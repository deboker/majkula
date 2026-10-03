/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'node:url';
const nextConfig = { output: 'export', outputFileTracingRoot: fileURLToPath(new URL('.', import.meta.url)) };
export default nextConfig;
