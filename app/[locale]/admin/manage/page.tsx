import VideosTable from "@/components/manage-vedio-table";
import { fetchMediaData } from "@/helpers/api/media.request";

const Manage = async () => {
  const media = await fetchMediaData();

  return (
    <div>
      <VideosTable media={media} />
    </div>
  );
};

export default Manage;
