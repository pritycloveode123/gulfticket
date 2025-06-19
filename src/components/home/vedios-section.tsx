const winnerVideos = [
    "https://www.youtube.com/embed/QqJQy8y0T5I",
    "https://www.youtube.com/embed/LL1InQ2h0Jg",
    "https://www.youtube.com/embed/DzVWTSCeLLM",
];

export default function VideosTesti() {
    return (
        <section className="bg-white py-12 px-4 sm:px-6" id="winner-videos">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#DF911A] mb-10 uppercase">
                    Real Winner Videos
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {winnerVideos.map((url, index) => (
                        <div
                            key={index}
                            className="w-full h-[260px] sm:h-[280px] md:h-[300px] rounded-xl overflow-hidden border-2 border-[#DF911A] shadow-lg"
                        >
                            <iframe
                                src={url}
                                title={`Winner video ${index + 1}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
