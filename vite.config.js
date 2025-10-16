import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readdirSync, statSync } from 'fs';

// Get all HTML files from root and subdirectories
function getHtmlEntries() {
  const entries = {
    main: resolve(__dirname, 'index.html')
  };

  return entries;
}

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/prompt-sharing/' : '/',
  publicDir: 'public',
  build: {
    rollupOptions: {
      input: getHtmlEntries()
    }
  }
});
