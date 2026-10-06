const YouTubeEmbed = ({ videoId, title }) => {
    return (
        <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
            <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
            />
        </div>
    );
};

export default YouTubeEmbed;
