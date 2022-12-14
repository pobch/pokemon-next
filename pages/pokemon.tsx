import axios from 'axios'
import { InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { SetStateAction, useEffect } from 'react'

export type ResData = {
  count: number
  next: string | null
  previous: string | null
  results: Array<{ name: string; url: string }>
}

function Pokemon({
  data,
  pokemons,
  setPokemons,
}: InferGetServerSidePropsType<typeof getServerSideProps> & {
  pokemons: ResData['results']
  setPokemons: React.Dispatch<SetStateAction<ResData['results']>>
}) {
  useEffect(() => {
    function fetchMore() {
      if (pokemons.length > 0) return
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50) {
        const URL = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=100'
        axios.get<ResData>(URL).then((res) => {
          setPokemons((prev) => [...prev, ...res.data.results])
        })
        window.removeEventListener('scroll', fetchMore)
      }
    }
    window.addEventListener('scroll', fetchMore)
    return () => window.removeEventListener('scroll', fetchMore)
  }, [pokemons.length, setPokemons])
  return (
    <div>
      <Head>
        <title>List</title>
      </Head>

      <nav
        style={{
          position: 'sticky',
          top: 0,
          backgroundColor: 'black',
          color: 'white',
          padding: '1rem 2rem',
        }}
      >
        <Link href={'/'}>
          <a>Home Page</a>
        </Link>
      </nav>

      <main>
        <h1>Pokemon List</h1>
        {data.results.map((poke) => {
          const id = poke.url.split('/').at(-2)
          return (
            <div
              key={id}
              style={{ fontSize: '1.5rem', padding: '1rem 1.5rem', color: 'cornflowerblue' }}
            >
              <Link href={`/pokemon/${id}`}>
                <a>
                  {id}. {poke.name} 🔗
                </a>
              </Link>
            </div>
          )
        })}
        {pokemons.map((poke) => {
          const id = poke.url.split('/').at(-2)
          return (
            <div
              key={id}
              style={{ fontSize: '1.5rem', padding: '1rem 1.5rem', color: 'lightseagreen' }}
            >
              <Link href={`/pokemon/${id}`}>
                <a>
                  {id}. {poke.name} 🔗
                </a>
              </Link>
            </div>
          )
        })}
      </main>
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  const URL = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
  const res = await axios.get<ResData>(URL)
  const data = res.data

  // Pass data to the page via props
  return { props: { data } }
}

export default Pokemon
