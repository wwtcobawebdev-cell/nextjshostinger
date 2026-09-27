import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const VIDEOS = [
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
]

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function getRandomImageUrl(seed) {
  return `https://picsum.photos/seed/${seed}/800/480`
}

export default function Home() {
  const [imageSeed, setImageSeed] = useState(null)
  const [videoUrl, setVideoUrl] = useState(null)

  const randomize = () => {
    setImageSeed(Math.floor(Math.random() * 1000))
    setVideoUrl(getRandom(VIDEOS))
  }

  useEffect(() => {
    randomize()
  }, [])

  return (
    <>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="This website is working!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.container}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          Website is live
        </div>

        <h1 className={styles.heading}>
          This website<br />
          <span>is working ✓</span>
        </h1>

        <p className={styles.subtitle}>
          Built with Next.js · Deployed on Hostinger
        </p>

        {imageSeed && videoUrl && (
          <div className={styles.mediaGrid}>
            <div className={styles.card}>
              <div className={styles.cardLabel}>Random Image</div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getRandomImageUrl(imageSeed)}
                alt="Random image from Picsum"
              />
            </div>

            <div className={styles.card}>
              <div className={styles.cardLabel}>Random Video</div>
              <video key={videoUrl} controls autoPlay muted loop>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
        )}

        <button className={styles.refreshBtn} onClick={randomize}>
          🔀 New Random Media
        </button>

        <p className={styles.footer}>
          Images by picsum.photos · Videos by Google Storage samples
        </p>
      </main>
    </>
  )
}
