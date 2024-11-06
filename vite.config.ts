import { AliasOptions, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//@ts-expect-error: Alternative you can install node types: 'npm i @types/node -D'
import path from "path";

//@ts-expect-error: Alternative you can install node types: 'npm i @types/node -D'
const root = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': root,
    } as AliasOptions,
  },
})
