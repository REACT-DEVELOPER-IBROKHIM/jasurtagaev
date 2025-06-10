import { fetchMediaData } from "@/helpers/api/media.request";
import { IMedia } from "@/types/article";
import Button from "@/utils/components/button";
import React from "react";

const Media = async () => {
  const mediaData = await fetchMediaData();

  return (
    <section className="w-full flex my-[100px]">
      <div className="container mx-auto">
        <div className="flex gap-4 justify-between">
          {mediaData.map((media: IMedia) => (
            <div className="flex-1 bg-gradient-to-r from-white/60 to-[#082D4F]/70 bg-[#1e73be] text-white text-center">
              {
                // <iframe
                //   width={"100%"}
                //   height={"400px"}
                //   className='mb-4'
                //   referrerPolicy="strict-origin-when-cross-origin"
                //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                //   allowFullScreen
                //   src={
                //     media.link
                //   }></iframe>
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
                <Button className="bg-blue-800 mt-4 px-[30px] py-[10px] cursor-pointer border-1 border-white rounded-[5px] hover:bg-blue-700">
                  Watch Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;
