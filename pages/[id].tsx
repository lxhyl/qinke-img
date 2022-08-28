import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router"
import { useMemo, useCallback, useState, useEffect } from "react"

const fileMeta: { [key: string]: string[] } = {
  '1': [
    '1.JPG', '10.JPG', '11.JPG', '12.JPG',
    '13.JPG', '14.JPG', '15.JPG', '16.JPG',
    '17.JPG', '18.JPG', '19.JPG', '2.JPG',
    '20.JPG', '21.JPG', '22.JPG', '23.JPG',
    '24.JPG', '25.JPG', '26.JPG', '27.JPG',
    '28.JPG', '29.JPG', '3.JPG', '30.JPG',
    '31.JPG', '32.JPG', '33.JPG', '34.JPG',
    '35.JPG', '36.JPG', '37.JPG', '38.JPG',
    '39.JPG', '4.JPG', '40.JPG', '41.JPG',
    '42.JPG', '43.JPG', '44.JPG', '45.JPG',
    '46.JPG', '5.JPG', '6.JPG', '7.JPG',
    '8.JPG', '9.JPG'
  ],
  '2': ['1.JPG', '2.JPG', '3.JPG', '4.JPG', '5.JPG'],
  '3': [
    '1.JPG', '10.JPG', '11.JPG',
    '12.JPG', '13.JPG', '14.JPG',
    '15.JPG', '16.JPG', '17.JPG',
    '18.JPG', '19.JPG', '2.JPG',
    '20.JPG', '21.JPG', '22.JPG',
    '23.JPG', '24.JPG', '25.JPG',
    '26.JPG', '27.JPG', '28.JPG',
    '29.JPG', '3.JPG', '30.JPG',
    '4.JPG', '5.JPG', '6.JPG',
    '7.JPG', '8.JPG', '9.JPG'
  ],
  '4': [
    '1.JPG', '10.JPG', '11.JPG',
    '12.JPG', '13.JPG', '14.JPG',
    '15.JPG', '16.JPG', '17.JPG',
    '18.JPG', '19.JPG', '2.JPG',
    '20.JPG', '21.JPG', '22.JPG',
    '23.JPG', '24.JPG', '25.JPG',
    '26.JPG', '27.JPG', '28.JPG',
    '29.JPG', '3.JPG', '30.JPG',
    '4.JPG', '5.JPG', '6.JPG',
    '7.JPG', '8.JPG', '9.JPG'
  ],
  '5': [
    '1.JPG', '2.JPG',
    '3.JPG', '4.JPG',
    '5.JPG', '6.JPG',
    '7.JPG'
  ]
}
const Home: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const imgs = useMemo(() => {
    if (!id) return []
    return fileMeta[id as string]
  }, [id])
  const getRandomIndex = useCallback(() => {
    const len = imgs.length
    return Math.floor(Math.random() * len)
  }, [imgs])
  const [fileName, setFileName] = useState<string>()
  const getRandomFile = useCallback(() => {
    const index = getRandomIndex()
    setFileName(imgs[index])
  }, [getRandomIndex, setFileName, imgs])
  useEffect(() => {
    getRandomFile()
  }, [getRandomFile])
  if (!imgs || imgs.length === 0) return <div>page id not found</div>
  if (!fileName) return <div>img not found</div>
  return <div onClick={getRandomFile}>
    <Image src={`/imgs/${id}/${fileName}`} alt="" layout='fill'></Image>
  </div>
}

export default Home
