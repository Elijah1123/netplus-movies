import Hero from "@/components/Hero";
import ContentGrid from "@/components/ContentGrid";
import OTTApps from "@/components/OTTApps";
import movieAction from "@/assets/movie-action.jpg";
import animeShow from "@/assets/anime-show.jpg";
import tvDrama from "@/assets/tv-drama.jpg";

const HomePage = () => {
  // Mock data - ready for API integration
  const trendingMovies = [
    { id: "1", title: "Action Fury", image: movieAction, rating: 5, year: "2024", type: "movie" as const, isNew: true },
    { id: "2", title: "Dark Shadows", image: tvDrama, rating: 4, year: "2024", type: "movie" as const },
    { id: "3", title: "Cosmic Battle", image: movieAction, rating: 5, year: "2024", type: "movie" as const, isNew: true },
    { id: "4", title: "Night Runner", image: tvDrama, rating: 4, year: "2023", type: "movie" as const },
    { id: "5", title: "Steel Hearts", image: movieAction, rating: 5, year: "2024", type: "movie" as const, isNew: true },
    { id: "6", title: "Echo Chamber", image: tvDrama, rating: 4, year: "2024", type: "movie" as const },
  ];

  const popularTVShows = [
    { id: "7", title: "Mystery Lane", image: tvDrama, rating: 5, year: "2024", type: "tv" as const, isNew: true },
    { id: "8", title: "Corporate Battles", image: tvDrama, rating: 4, year: "2024", type: "tv" as const },
    { id: "9", title: "Midnight Stories", image: tvDrama, rating: 5, year: "2023", type: "tv" as const, isNew: true },
    { id: "10", title: "Urban Legends", image: tvDrama, rating: 4, year: "2024", type: "tv" as const },
    { id: "11", title: "The Syndicate", image: tvDrama, rating: 5, year: "2024", type: "tv" as const, isNew: true },
    { id: "12", title: "Final Days", image: tvDrama, rating: 4, year: "2024", type: "tv" as const },
  ];

  const animeCollection = [
    { id: "13", title: "Dragon Saga", image: animeShow, rating: 5, year: "2024", type: "anime" as const, isNew: true },
    { id: "14", title: "Spirit Warriors", image: animeShow, rating: 5, year: "2024", type: "anime" as const },
    { id: "15", title: "Cyber Knights", image: animeShow, rating: 4, year: "2023", type: "anime" as const, isNew: true },
    { id: "16", title: "Magic Academy", image: animeShow, rating: 5, year: "2024", type: "anime" as const },
    { id: "17", title: "Stellar Dreams", image: animeShow, rating: 5, year: "2024", type: "anime" as const, isNew: true },
    { id: "18", title: "Dark Dimension", image: animeShow, rating: 4, year: "2024", type: "anime" as const },
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      <OTTApps />
      <div className="-mt-8 relative z-10">
        <ContentGrid title="Trending Now" items={trendingMovies} />
        <ContentGrid title="Popular on Netflix" items={popularTVShows} />
        <ContentGrid title="Top Anime" items={animeCollection} />
      </div>
    </div>
  );
};

export default HomePage;
