import React from "react"

import './index.module.scss'

import classes from './index.module.scss'
import { Gutter } from "../../_components/Gutter"

export const dynamic = 'force-dynamic'

export default function ContactUs() {
  return (
    <Gutter className="contact-us-Gutter">
      <h1 className="contact-us-header">Contact Us</h1>
      <form className="contact-us-form">
        <label htmlFor="Full Name"></label>
        <input type="text" id="name" name="name" placeholder="Full Name" />

        <label htmlFor="Email"></label>
        <input type="email" id="email" name="email" placeholder="Email" />

        <label htmlFor="Message"></label>
        <textarea id="message" name="message" placeholder="Message"></textarea>

        <button type="submit">SEND</button>
      </form>
    </Gutter >
  )
}