import React from "react"

export const dynamic = 'force-dynamic'

export default function ContactUs() {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <label htmlFor="Full Name">Full Name</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="Email">Email</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="Message">Message</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">SEND</button>
      </form>
    </div>
  )
}