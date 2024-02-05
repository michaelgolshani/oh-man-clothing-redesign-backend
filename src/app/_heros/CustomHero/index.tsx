'use client'

import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Image from 'next/image'

import hero from '../../../../media/front-compressed.jpg'
import soul from '../../../../public/oh-man-images/SOUL-4.jpeg'
import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'
import CustomSlider from './customSlider'

import './Home.css'

import classes from './index.module.scss'

export const CustomHero: React.FC<Page['hero']> = ({ richText, media, links }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])

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
    <>
      <div className="home" data-scroll-container ref={containerRef} id="scroll-container">
        <section className="hero-img" data-scroll-section>
          <div className="hero-img-container">{mediaContent}</div>
          <div className="hero-img-copy">
            <div className="hero-img-copy-h1" style={{ fontFamily: 'honkwarp, sans-serif' }}>
              <RichText content={richText} />
            </div>
          </div>
        </section>
      </div>

      <div className="scroll-img-slider-container">
        <div className="sidebar">
          <div className="sidebar-item">
            <p id="header">
              life's a
              <br />
              gamble
            </p>
            <p>
              Printed in Los Angeles
              <br />
              (Explore Catalog)
            </p>
          </div>
          <div className="sidebar-item">
            {/* <p>/I2IVU98</p> */}
            {/* <p>Scroll Experience</p> */}
          </div>
        </div>
        <CustomSlider />
      </div>

      <section className="projects" data-scroll-section>
        <div className="projects-copy">
          <div className="projects-copy-ws"></div>

          <div className="projects-copy-h1">
            <h1>Design with intention.</h1>
          </div>
        </div>
        <div className="projects-list">
          <a href="/products/lucky-for-life-premium-tee-in-vintage-black" className="project">
            <div className="project-img project-img-1"></div>
            <div className="project-name">
              <p>"Lucky" for Life Premium Tee in Vintage Black</p>
            </div>
          </a>
          <a href="/products/manifest-premium-knit-tee-in-vintage-black" className="project">
            <div className="project-img project-img-2"></div>
            <div className="project-name">
              <p>Manifest Premium Knit Tee in Vintage Black</p>
            </div>
          </a>
        </div>
        <div className="projects-list">
          <a href="/products/peace-on-earth-premium-hoodie-in-desert-sands" className="project">
            <div className="project-img project-img-3"></div>
            <div className="project-name">
              <p>Peace on Earth Premium Hoodie in Desert Sands</p>
            </div>
          </a>
          <a href="/products/1n-2-wishin-premium-tee-in-black" className="project">
            <div className="project-img project-img-4"></div>
            <div className="project-name">
              <p>1n 2 Wishin' Premium Tee in Black</p>
            </div>
          </a>
        </div>
      </section>
      <section className="soul-container" style={{ position: 'relative', height: '100vh' }}>
        <Image
          src={soul}
          alt="Description of the image"
          layout="fill" // Set the layout to fill
          objectFit="cover" // Use objectFit to cover the container
        />
      </section>

      <section id="about-sticky-wrap" data-scroll-section>
        <div
          className="about-sticky about-sticky-1"
          data-scroll
          data-scroll-sticky
          data-scroll-target="#about-sticky-wrap"
        >
          <div className="sticky-content">
            <div className="sitcky-content-h1">
              <h1 className="num">BET ON YOURSELF</h1>
            </div>
            <div className="sitcky-content-h1">
              {/* <h1 className="sticky-font">Design:</h1> */}
              <h1 className="sticky-font">
                "Lucky for Life" is about carving your own path, where what may appear as good
                fortune is actually the result of your unrelenting dedication and perseverance.
              </h1>
            </div>
          </div>
        </div>
        <div className="about-sticky about-sticky-2">
          <div className="sticky-content">
            <div className="sitcky-content-h1">
              <h1 className="num">PERSEVERE</h1>
            </div>
            <div className="sitcky-content-h1">
              {/* <h1 className="sticky-font">Development:</h1> */}
              <h1 className="sticky-font">
                the hard work goes unnoticed. Your legacy will speak for itself. And all while you
                make it appear utterly effortless.
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
