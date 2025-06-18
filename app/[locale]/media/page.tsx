import Banner from '@/components/banner'
import Header from '@/components/header'
import React from 'react'

const Media = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto py-4">
        <Banner
          image={'/banner-images/banner-image-media.png'}
          title="Media Coverage"
          opacity={0.7}
          description="Explore media coverage and articles featuring Jasur Tagaev, showcasing insights and contributions in various fields."
        />
      </main>
    </>
  )
}

export default Media