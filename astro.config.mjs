import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 项目配置
  output: 'static',
  // 构建配置
  build: {
    // 构建输出目录
    outDir: 'dist',
    // 是否压缩HTML
    minify: true,
  },
  // 开发服务器配置
  server: {
    port: 4321,
    host: false,
  },
  // 预览服务器配置
  preview: {
    port: 4321,
    host: false,
  },
});
