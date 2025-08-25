import VideosTable from "@/components/manage-video-table";
import { fetchMediaData } from "@/helpers/api/media.request";

const Manage = async () => {
  const media = await fetchMediaData();

  return (
    <>
      <VideosTable media={media} />
    </>
  );
};

export default Manage;
