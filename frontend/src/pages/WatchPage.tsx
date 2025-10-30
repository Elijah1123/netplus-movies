import { useParams } from "react-router-dom";
import { Play, Plus, ThumbsUp, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useRef, useEffect } from "react";
import introVideo from "@/assets/intro-video.mp4";

const WatchPage = () => {
  const { id } = useParams();
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [selectedEpisode, setSelectedEpisode] = useState(1);
  const [showIntro, setShowIntro] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Mock data - ready for API integration
  const contentData = {
    title: "Stellar Odyssey",
    year: "2024",
    rating: 5,
    genres: ["Sci-Fi", "Action", "Adventure"],
    duration: "2h 15m",
    description:
      "In the year 2187, humanity's last hope lies in the hands of a rogue space crew on a mission to save Earth from an ancient alien threat. An epic journey across the cosmos awaits, filled with breathtaking battles, unexpected alliances, and the discovery of humanity's true place in the universe.",
    director: "Alex Chen",
    cast: ["Sarah Mitchell", "James Park", "Emma Rodriguez", "Michael Chang"],
    type: "tv", // 'movie' or 'tv'
  };

  // Mock seasons and episodes
  const seasons = [
    {
      season: 1,
      episodes: [
        { episode: 1, title: "Departure", duration: "45m" },
        { episode: 2, title: "First Contact", duration: "48m" },
        { episode: 3, title: "Alliance", duration: "46m" },
        { episode: 4, title: "Betrayal", duration: "50m" },
        { episode: 5, title: "Revelation", duration: "47m" },
        { episode: 6, title: "The Final Stand", duration: "52m" },
      ],
    },
    {
      season: 2,
      episodes: [
        { episode: 1, title: "New Dawn", duration: "46m" },
        { episode: 2, title: "Shadows Return", duration: "48m" },
        { episode: 3, title: "Unity", duration: "45m" },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Video Player */}
      <div className="w-full bg-black aspect-video relative">
        {showIntro ? (
          <video
            ref={videoRef}
            src={introVideo}
            className="w-full h-full object-cover"
            autoPlay
            onEnded={() => setShowIntro(false)}
            controls
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white">
            <div className="text-center space-y-4">
              <Play className="h-20 w-20 mx-auto opacity-50" />
              <p className="text-lg opacity-70">Main Content</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setShowIntro(true)}
              >
                Watch Intro Again
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Content Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-4xl font-heading font-bold mb-2">{contentData.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span>{contentData.year}</span>
                <span>•</span>
                <span>{contentData.duration}</span>
                <span>•</span>
                <div className="star-rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < contentData.rating ? "text-yellow-400" : "text-muted"}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button className="bg-netplus-red hover:bg-netplus-red/90 text-white gap-2">
                <Play className="h-5 w-5 fill-current" />
                Play
              </Button>
              <Button variant="secondary" className="gap-2">
                <Plus className="h-5 w-5" />
                Watchlist
              </Button>
              <Button variant="ghost" size="icon">
                <ThumbsUp className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {contentData.genres.map((genre) => (
                <span
                  key={genre}
                  className="px-3 py-1 bg-secondary rounded-full text-sm"
                >
                  {genre}
                </span>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {contentData.description}
            </p>

            {/* Episodes Section for TV Shows */}
            {contentData.type === "tv" && (
              <Tabs defaultValue="season-1" className="w-full">
                <TabsList>
                  {seasons.map((season) => (
                    <TabsTrigger
                      key={season.season}
                      value={`season-${season.season}`}
                      onClick={() => setSelectedSeason(season.season)}
                    >
                      Season {season.season}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {seasons.map((season) => (
                  <TabsContent
                    key={season.season}
                    value={`season-${season.season}`}
                    className="space-y-2 mt-4"
                  >
                    {season.episodes.map((episode) => (
                      <div
                        key={episode.episode}
                        className="flex items-center justify-between p-4 bg-secondary rounded-lg hover:bg-accent cursor-pointer transition-colors"
                        onClick={() => setSelectedEpisode(episode.episode)}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-muted rounded flex items-center justify-center font-semibold">
                            {episode.episode}
                          </div>
                          <div>
                            <p className="font-semibold">{episode.title}</p>
                            <p className="text-sm text-muted-foreground">
                              {episode.duration}
                            </p>
                          </div>
                        </div>
                        <Play className="h-5 w-5 text-muted-foreground" />
                      </div>
                    ))}
                  </TabsContent>
                ))}
              </Tabs>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-secondary p-6 rounded-lg space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Director</h3>
                <p className="text-muted-foreground">{contentData.director}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Cast</h3>
                <ul className="space-y-1 text-muted-foreground">
                  {contentData.cast.map((actor) => (
                    <li key={actor}>{actor}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
