const THEME_KEY = 'theme'

export type Theme = 'light' | 'dark'

export function getStoredTheme(): Theme | null {
  const stored = localStorage.getItem(THEME_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return null
}

export function getResolvedTheme(): Theme {
  return getStoredTheme() ?? 'light'
}

export function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute('data-theme', theme)
}

export function setTheme(theme: Theme): void {
  localStorage.setItem(THEME_KEY, theme)
  applyTheme(theme)
}

export function initTheme(): void {
  applyTheme(getResolvedTheme())
}
