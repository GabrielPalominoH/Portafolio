import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeroUIProvider } from '@heroui/react'
import { ThemeProvider } from 'next-themes'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        <main className="text-foreground bg-background">
          <App />
        </main>
      </ThemeProvider>
    </HeroUIProvider>
  </StrictMode>,
)
