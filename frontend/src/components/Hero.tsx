import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import heroImage from "@/assets/hero-featured.jpg";
import movieAction from "@/assets/movie-action.jpg";
import tvDrama from "@/assets/tv-drama.jpg";
import animeShow from "@/assets/anime-show.jpg";
import netPulseLogo from "@/assets/net-pulse-logo.png";

const featuredContent = [
  {
    id: 1,
    title: "Stellar Odyssey",
    description: "In the year 2187, humanity's last hope lies in the hands of a rogue space crew on a mission to save Earth from an ancient alien threat. An epic journey across the cosmos awaits.",
    year: "2024",
    genre: "Sci-Fi",
    image: heroImage,
  },
  {
    id: 2,
    title: "Action Fury",
    description: "When a former special ops agent is forced back into action, he must confront his dark past and protect his family from a dangerous cartel seeking revenge.",
    year: "2024",
    genre: "Action",
    image: movieAction,
  },
  {
    id: 3,
    title: "Mystery Lane",
    description: "A brilliant detective uncovers a web of secrets in a small town where nothing is as it seems. Every clue leads to more questions in this gripping thriller.",
    year: "2024",
    genre: "Mystery",
    image: tvDrama,
  },
  {
    id: 4,
    title: "Dragon Saga",
    description: "In a world where ancient dragons have returned, a young warrior must master forgotten powers to save humanity from an age-old prophecy coming true.",
    year: "2024",
    genre: "Anime",
    image: animeShow,
  },
];

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    
    // Auto-play carousel
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);

    return () => {
      clearInterval(autoplay);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {featuredContent.map((content) => (
            <div key={content.id} className="embla__slide flex-[0_0_100%] relative">
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0">
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              </div>

              {/* Logo Overlay */}
              <div className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 z-10">
                <img 
                  src={netPulseLogo} 
                  alt="Net Pulse" 
                  className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-auto opacity-90 drop-shadow-2xl animate-fade-in" 
                />
              </div>

              {/* Content */}
              <div className="relative px-4 sm:px-6 md:px-12 h-full flex items-center">
                <div className="max-w-xl lg:max-w-2xl space-y-3 sm:space-y-4 md:space-y-6 fade-in">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold leading-tight text-white">
                    {content.title}
                  </h1>
                  
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm flex-wrap">
                    <span className="px-2 sm:px-3 py-1 bg-[#E50914] text-white rounded-sm font-semibold text-xs sm:text-sm">
                      NEW
                    </span>
                    <span className="text-white/90 font-semibold">{content.year}</span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/90">{content.genre}</span>
                    <span className="text-white/40">•</span>
                    <span className="px-1.5 border border-white/40 text-white/90 text-[10px]">16+</span>
                  </div>
                  
                  <p className="text-xs text-white/80 font-medium">
                    Watch in Hindi, Tamil, Telugu, Malayalam, Kannada, English
                  </p>

                  <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-xl leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {content.description}
                  </p>

                  <div className="flex gap-2 sm:gap-3 md:gap-4 pt-2 md:pt-4">
                    <Button size="lg" className="bg-white hover:bg-white/90 text-black font-bold gap-2 px-4 sm:px-6 md:px-8 text-sm sm:text-base h-10 sm:h-11 md:h-12 rounded-sm">
                      <Play className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
                      Play
                    </Button>
                    <Button size="lg" className="gap-2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm px-4 sm:px-6 md:px-8 text-sm sm:text-base h-10 sm:h-11 md:h-12 rounded-sm border border-white/30">
                      <Info className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="hidden sm:inline">More Info</span>
                      <span className="sm:hidden">Info</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-12 flex gap-2 z-20">
        {featuredContent.map((_, index) => (
          <button
            key={index}
            className={`h-0.5 sm:h-1 transition-all duration-300 ${
              index === selectedIndex
                ? "w-8 sm:w-10 md:w-12 bg-white"
                : "w-2 sm:w-2.5 md:w-3 bg-white/30 hover:bg-white/50"
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
