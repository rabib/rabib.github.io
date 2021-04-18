import React from "react"
// import { Link } from "gatsby"

import { Blob } from "../components/atoms"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/postList"
import ProjectList from "../components/projectList"
import Contact from "../components/contact"
import Image from "../components/image"

const IndexPage = () => (
  <Layout activePage="/">
    <SEO />
    <div className="mt-12 flex flex-col-reverse lg:flex-row items-center lg:justify-between lg:space-x-6">
      <div>
        <h1 className="mt-12 lg:mt-0 max-w-3xl text-3xl sm:text-4xl text-primary font-semibold sm:text-left md:text-center lg:text-left">
          Rabib:
          <br className="mb-6 lg:hidden" /> Cryptographer and Data Scientist
        </h1>
        <div className="relative text-primary">
          <p className="mt-6">My research interests are quantum cryptography and zero-knowledge proofs. I am also very interested in distributed ledgers and decentralized finance. I currently work as a Data Scientist at Health Canada.</p>
          <p className="mt-2">I hold an MSc in Mathematics from the University of Ottawa, where I also did my undergraduate studies. I've held multiple positions in government, including a few research assistantships with the Multilingual Text Processing group at the National Research Council, where I worked with their statistical machine translation system, PORTAGE.</p>

        </div>
      </div>
      <div className="relative">
        <Blob />
        <div className="absolute w-full h-full top-0 flex items-center justify-center">
          <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 rounded-full overflow-hidden">
            <Image />
          </div>
        </div>
      </div>
    </div>
    <PostList showHeading />
    <Contact />
  </Layout>
)

export default IndexPage
