import Video from "@/models/video.model";

export const POST = async (request: Request) => {
  const body = await request.json();

  const video = new Video(body);

  await video.save();

  return new Response(JSON.stringify(video), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

export const GET = async () => {
  const videos = await Video.find().sort({ createdAt: -1 });
  return new Response(JSON.stringify(videos), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

export const DELETE = async (request: Request) => {
  const { id } = await request.json();

  if (!id) {
    return new Response("Video ID is required", { status: 400 });
  }

  try {
    await Video.findByIdAndDelete(id);
    return new Response("Video deleted", { status: 200 });
  } catch (error) {
    console.error("Error deleting video:", error);
    return new Response("Failed to delete video", { status: 500 });
  }
};
