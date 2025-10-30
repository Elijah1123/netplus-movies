import ContentGrid from "@/components/ContentGrid";
import movieAction from "@/assets/movie-action.jpg";
import tvDrama from "@/assets/tv-drama.jpg";

const MoviesPage = () => {
  const trendingMovies = [
    { id: "1", title: "Action Fury", image: movieAction, rating: 5, year: "2024", type: "movie" as const },
    { id: "2", title: "Dark Shadows", image: tvDrama, rating: 4, year: "2024", type: "movie" as const },
    { id: "3", title: "Cosmic Battle", image: movieAction, rating: 5, year: "2024", type: "movie" as const },
    { id: "4", title: "Night Runner", image: tvDrama, rating: 4, year: "2023", type: "movie" as const },
    { id: "5", title: "Steel Hearts", image: movieAction, rating: 5, year: "2024", type: "movie" as const },
    { id: "6", title: "Echo Chamber", image: tvDrama, rating: 4, year: "2024", type: "movie" as const },
    { id: "7", title: "Thunder Strike", image: movieAction, rating: 5, year: "2024", type: "movie" as const },
  ];

  const actionMovies = [
    { id: "10", title: "Velocity", image: movieAction, rating: 5, year: "2024", type: "movie" as const },
    { id: "11", title: "Rogue Agent", image: movieAction, rating: 4, year: "2024", type: "movie" as const },
    { id: "12", title: "Combat Zone", image: movieAction, rating: 5, year: "2023", type: "movie" as const },
    { id: "13", title: "Inferno", image: movieAction, rating: 4, year: "2024", type: "movie" as const },
    { id: "14", title: "Blackout", image: movieAction, rating: 5, year: "2024", type: "movie" as const },
    { id: "15", title: "Apex", image: movieAction, rating: 4, year: "2024", type: "movie" as const },
    { id: "16", title: "Vendetta", image: movieAction, rating: 5, year: "2023", type: "movie" as const },
  ];

  const dramaMovies = [
    { id: "20", title: "Lost Pages", image: tvDrama, rating: 5, year: "2024", type: "movie" as const },
    { id: "21", title: "Whispers", image: tvDrama, rating: 4, year: "2024", type: "movie" as const },
    { id: "22", title: "The Crossing", image: tvDrama, rating: 5, year: "2024", type: "movie" as const },
    { id: "23", title: "Mirror Image", image: tvDrama, rating: 4, year: "2023", type: "movie" as const },
    { id: "24", title: "Silent Echo", image: tvDrama, rating: 5, year: "2024", type: "movie" as const },
    { id: "25", title: "Fragments", image: tvDrama, rating: 4, year: "2024", type: "movie" as const },
    { id: "26", title: "Reflections", image: tvDrama, rating: 5, year: "2024", type: "movie" as const },
  ];

  const thrillerMovies = [
    { id: "30", title: "Red Alert", image: movieAction, rating: 5, year: "2024", type: "movie" as const },
    { id: "31", title: "The Witness", image: tvDrama, rating: 4, year: "2024", type: "movie" as const },
    { id: "32", title: "Dead End", image: movieAction, rating: 5, year: "2024", type: "movie" as const },
    { id: "33", title: "Conspiracy", image: tvDrama, rating: 4, year: "2023", type: "movie" as const },
    { id: "34", title: "Lockdown", image: movieAction, rating: 5, year: "2024", type: "movie" as const },
    { id: "35", title: "Shadow Play", image: tvDrama, rating: 4, year: "2024", type: "movie" as const },
    { id: "36", title: "Final Hour", image: movieAction, rating: 5, year: "2024", type: "movie" as const },
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-[72px]">
      <div className="px-4 sm:px-6 md:px-12 py-6 sm:py-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-2">Movies</h1>
        <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">Explore our collection of blockbuster films</p>
      </div>
      <ContentGrid title="Trending Movies" items={trendingMovies} />
      <ContentGrid title="Action & Adventure" items={actionMovies} />
      <ContentGrid title="Drama Films" items={dramaMovies} />
      <ContentGrid title="Thriller & Suspense" items={thrillerMovies} />
    </div>
  );
};

export default MoviesPage;
