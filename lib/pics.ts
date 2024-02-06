import szabadteri1 from '../assets/Pati-15.jpg'
import egyeni1 from '../assets/IMG_6728.jpg'
import karacsonyi1 from '../assets/kari-147.jpg'
import eskuvoi1 from '../assets/LiliSamu-117.jpg'
import kismama1 from '../assets/kismama-083.jpg'
import rendezveny1 from '../assets/honlap-3.jpg'
import paros1 from '../assets/honlap-2.jpg'
import csaladi1 from '../assets/orsiek6.jpg'
import { StaticImageData } from 'next/image'

interface allPicture {
    [key: string]: StaticImageData[]

}

export const allPicture: allPicture = {
    'szabadterifotozas': [szabadteri1],
    'egyenifotozas': [egyeni1],
    'karacsonyifotozas': [karacsonyi1],
    'eskuvoifotozas': [eskuvoi1],
    'kismamafotozas': [kismama1],
    'rendezvenyfotozas': [rendezveny1],
    'parosfotozas': [paros1],
    'csaladifotozas': [csaladi1],
}