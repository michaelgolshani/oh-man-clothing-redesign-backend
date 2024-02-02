'use client'

import React, { Fragment } from 'react'
import { useState, useEffect, useRef } from 'react'
import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'
import hero from '../../../../media/front-compressed.jpg'
import Image from 'next/image'
import './Home.css'

import classes from './index.module.scss'

export const CustomHero: React.FC<Page['hero']> = ({ richText, media, links }) => {
  const containerRef = useRef(null)
  let mediaContent

  if (media) {
    if (typeof media === 'string') {
      // If media is a string, assume it's an image URL
      mediaContent = <img src={media} alt="Picture of the author" className="hero-image" />
    } else if (media.filename.endsWith('.mp4')) {
      // If media is an object and the filename ends with '.mp4', assume it's a video
      const videoUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${media.filename}`
      mediaContent = <video autoPlay muted loop src={videoUrl} className="hero-video" />
    } else {
      // If media is an object, but it's not a video, assume it's an image
      const imageUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${media.filename}`
      mediaContent = <img src={imageUrl} alt="Picture of the author" className="hero-image" />
    }
  }

  return (
    <div className="home" data-scroll-container ref={containerRef} id="scroll-container">
      <section className="hero-img" data-scroll-section>
        <div className="hero-img-container">{mediaContent}</div>
        <div className="hero-img-copy">
          <div className="hero-img-copy-h1" style={{fontFamily: 'honkwarp, sans-serif' }}>
            <RichText content={richText} />
          </div>
        </div>
      </section>
    </div>
  )
}