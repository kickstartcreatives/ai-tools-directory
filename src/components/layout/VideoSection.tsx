interface VideoSectionProps {
  videoUrl?: string;
  title?: string;
}

export function VideoSection({ videoUrl, title = "Welcome Message from Diane" }: VideoSectionProps) {
  // Don't render anything if no video URL is provided
  if (!videoUrl || videoUrl === "YOUR_VIDEO_EMBED_URL_HERE") {
    return null;
  }

  return (
    <section className="bg-ivory border-b-2 border-warm-gray py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {title && (
          <h2 className="text-2xl font-bold text-deep-purple mb-6 text-center">{title}</h2>
        )}
        <div className="aspect-video w-full rounded-xl overflow-hidden bg-warm-gray shadow-lg border-2 border-warm-gray">
          <iframe
            src={videoUrl}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
          />
        </div>
      </div>
    </section>
  );
}
