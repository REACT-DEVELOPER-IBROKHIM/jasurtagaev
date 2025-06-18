"use client";
import { IMedia } from '@/types/article'
import Button from '@/utils/components/button'

const MediaCard = ({ media, setSelectedMedia }: { media: IMedia, setSelectedMedia: (media: IMedia) => void }) => {

  return (
    <div
      key={media.id}
      className="flex-1 bg-gradient-to-r from-white/60 to-[#082D4F]/70 bg-[#1e73be] text-white text-center"
    >
      {

        <img
          width={"100%"}
          height={"400px"}
          src={media.thumbnail}
          alt=""
        />
      }
      <div className="p-8">
        <p className="text-2xl mb-8">{media.tag}</p>
        <h2 className="text-xl mb-4">{media.title}</h2>
        <Button onClick={() => {
          setSelectedMedia(media);
        }} className="bg-blue-800 mt-4 px-[30px] py-[10px] cursor-pointer border-1 border-white rounded-[5px] hover:bg-blue-700">
          Watch Now
        </Button>
      </div>
    </div>
  )
}

export default MediaCard