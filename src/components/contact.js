import React from "react"
import { ExtLink, Button } from "./atoms"

export const Contact = () => {
  return (
    <div className="mt-32 full-width-container bg-secondary">
      <div className="container max-w-screen-xl mx-auto pt-16 text-gray-900">
        <div className="mx-auto  pt-10 flex justify-center">
          <Button width="widest" link="mailto:risla zero two eight at uottawa dot ca">
            <span className=" text-2xl font-semibold text-on-accent">
              E-mail me
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Contact
