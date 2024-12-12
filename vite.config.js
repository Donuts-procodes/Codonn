export default defineConfig({
  base: '/react-gh-pages/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
});
