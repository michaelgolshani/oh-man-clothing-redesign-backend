import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

import image1 from '../../../../public/oh-man-images/image-1.jpg'
import image2 from '../../../../public/oh-man-images/image-2.jpg'
import image3 from '../../../../public/oh-man-images/image-3.jpg'
import image4 from '../../../../public/oh-man-images/image-4.jpg'
import image5 from '../../../../public/oh-man-images/image-5.jpg'
import image6 from '../../../../public/oh-man-images/image-6.jpg'
import image7 from '../../../../public/oh-man-images/image-7.jpg'
import image8 from '../../../../public/oh-man-images/image-8.jpg'
import image9 from '../../../../public/oh-man-images/image-9.jpg'

import './Home.css'

const CustomSlider = () => {
  const targetRef = useRef(0)
  const currentRef = useRef(0)
  const sliderRef = useRef(null)
  const sliderWrapperRef = useRef(null)
  const slidesRef = useRef([])
  const ease = 0.4

  const maxScrollRef = useRef(0)

  useEffect(() => {
    const slider = sliderRef.current
    const sliderWrapper = sliderWrapperRef.current
    const slides = slidesRef.current

    maxScrollRef.current = sliderWrapper.offsetWidth - window.innerWidth

    function lerp(start, end, factor) {
      return start + (end - start) * factor
    }

    function updateScaleAndPosition() {
      slides.forEach(slide => {
        const rect = slide.getBoundingClientRect()
        const centerPosition = (rect.left + rect.right) / 2
        const distanceFromCenter = centerPosition - window.innerWidth / 2

        let scale, offsetX
        if (distanceFromCenter > 0) {
          scale = Math.min(1.75, 1 + distanceFromCenter / window.innerWidth)
          offsetX = (scale - 1) * 300
        } else {
          scale = Math.max(0.5, 1 - Math.abs(distanceFromCenter) / window.innerWidth)
          offsetX = 0
        }

        gsap.set(slide, { scale: scale, x: offsetX })
      })
    }

    function update() {
      currentRef.current = lerp(currentRef.current, targetRef.current, ease)

      gsap.set(sliderWrapper, {
        x: -currentRef.current,
      })

      updateScaleAndPosition()

      requestAnimationFrame(update)
    }

    const handleResize = () => {
      maxScrollRef.current = sliderWrapper.offsetWidth - window.innerWidth
    }

    const handleWheel = e => {
      targetRef.current += e.deltaY
      targetRef.current = Math.max(0, targetRef.current)
      targetRef.current = Math.min(maxScrollRef.current, targetRef.current)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('wheel', handleWheel)

    update()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('wheel', handleWheel)
    }
  }, [])

  return (
    <div className="slider" ref={sliderRef}>
      <div className="slider-wrapper" ref={sliderWrapperRef}>
        <div className="slide" ref={el => (slidesRef.current[0] = el)}>
          <Image src={image1} alt="" />
        </div>
        <div className="slide" ref={el => (slidesRef.current[1] = el)}>
          <Image src={image2} alt="" />
        </div>
        {/* Add more slides as needed */}
        <div className="slide" ref={el => (slidesRef.current[2] = el)}>
          <Image src={image3} alt="" />
        </div>
        <div className="slide" ref={el => (slidesRef.current[3] = el)}>
          <Image src={image4} alt="" />
        </div>
        <div className="slide" ref={el => (slidesRef.current[4] = el)}>
          <Image src={image5} alt="" />
        </div>
        <div className="slide" ref={el => (slidesRef.current[5] = el)}>
          <Image src={image6} alt="" />
        </div>
        <div className="slide" ref={el => (slidesRef.current[6] = el)}>
          <Image src={image7} alt="" />
        </div>
        <div className="slide" ref={el => (slidesRef.current[7] = el)}>
          <Image src={image8} alt="" />
        </div>
        <div className="slide" ref={el => (slidesRef.current[8] = el)}>
          <Image src={image9} alt="" />
        </div>
        <div className="slide" ref={el => (slidesRef.current[9] = el)}>
          <Image src={image1} alt="" />
        </div>
        <div className="slide" ref={el => (slidesRef.current[10] = el)}>
          <Image src={image2} alt="" />
        </div>
        <div className="slide" ref={el => (slidesRef.current[11] = el)}>
          <Image src={image3} alt="" />
        </div>
        <div className="slide" ref={el => (slidesRef.current[12] = el)}>
          <Image src={image4} alt="" />
        </div>
        <div className="slide" ref={el => (slidesRef.current[13] = el)}>
          <Image src={image5} alt="" />
        </div>
        <div className="slide" ref={el => (slidesRef.current[14] = el)}>
          <Image src={image6} alt="" />
        </div>
        <div className="slide" ref={el => (slidesRef.current[6] = el)}>
          <Image src={image7} alt="" />
        </div>
        <div className="slide" ref={el => (slidesRef.current[7] = el)}>
          <Image src={image8} alt="" />
        </div>
        <div className="slide" ref={el => (slidesRef.current[8] = el)}>
          <Image src={image9} alt="" />
        </div>
      </div>
    </div>
  )
}

export default CustomSlider
