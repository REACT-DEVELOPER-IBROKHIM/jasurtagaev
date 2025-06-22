import Banner from '@/components/banner'
import Header from '@/components/header'
import React from 'react'
import Media from '@/components/media'
import { fetchMediaData } from '@/helpers/api/media.request'
import AfterBefore from '@/components/after-before'
import Footer from '@/components/footer'

const MediaPage = async () => {
  const mediaData = await fetchMediaData();

  return (
    <>
      <Header />
      <main className="container mx-auto py-4">
        <Banner
          image={'/banner-images/banner-image-media.JPG'}
          title="Media | Results"
          opacity={0.5}
          description="Explore media coverage and articles featuring Jasur Tagaev, showcasing insights and contributions in various fields."
        />
        <section>
          <h2 className='text-3xl mb-4'>Media Coverage</h2>
          <Media mediaData={mediaData} isFeatured={false} />
        </section>
        <section>
          <h2 className='text-3xl mb-4'>Results</h2>
          <AfterBefore />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default MediaPage