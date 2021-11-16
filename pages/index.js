import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Board } from '../components/board'
import { useBoard, useFetch } from '../hooks'
import { useState } from 'react'

export default function Home() {
  const [difficulty, setDifficulty] = useState('easy')
  const { board, set, update, clear, validate } = useBoard(difficulty)

  return (
    <div className={styles.container}>
      <Head>
        <title>Sudoku</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Board board={board} updateCell={update} />
      </main>
    </div>
  )
}
