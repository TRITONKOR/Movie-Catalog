import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: 3000,
        proxy: {
            '/api': 'http://localhost:3001',
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler'
            },
        },
    },
})
