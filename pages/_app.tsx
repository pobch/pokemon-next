import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { ResData } from './pokemon'

function MyApp({ Component, pageProps }: AppProps) {
  const [pokemons, setPokemons] = useState<ResData['results']>([])
  return <Component {...pageProps} pokemons={pokemons} setPokemons={setPokemons} />
}

export default MyApp
