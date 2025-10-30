import ContentGrid from "@/components/ContentGrid";
import tvDrama from "@/assets/tv-drama.jpg";
import movieAction from "@/assets/movie-action.jpg";

const TVShowsPage = () => {
  const popularShows = [
    { id: "7", title: "Mystery Lane", image: tvDrama, rating: 5, year: "2024", type: "tv" as const },
    { id: "8", title: "Corporate Battles", image: tvDrama, rating: 4, year: "2024", type: "tv" as const },
    { id: "9", title: "Midnight Stories", image: tvDrama, rating: 5, year: "2023", type: "tv" as const },
    { id: "10", title: "Urban Legends", image: tvDrama, rating: 4, year: "2024", type: "tv" as const },
    { id: "11", title: "The Syndicate", image: tvDrama, rating: 5, year: "2024", type: "tv" as const },
    { id: "12", title: "Final Days", image: tvDrama, rating: 4, year: "2024", type: "tv" as const },
    { id: "13", title: "Dark Waters", image: tvDrama, rating: 5, year: "2024", type: "tv" as const },
  ];

  const crimeDramas = [
    { id: "20", title: "Detective Files", image: tvDrama, rating: 5, year: "2024", type: "tv" as const },
    { id: "21", title: "Cold Case", image: tvDrama, rating: 4, year: "2024", type: "tv" as const },
    { id: "22", title: "Criminal Minds", image: tvDrama, rating: 5, year: "2024", type: "tv" as const },
    { id: "23", title: "Justice League", image: tvDrama, rating: 4, year: "2023", type: "tv" as const },
    { id: "24", title: "Law & Order", image: tvDrama, rating: 5, year: "2024", type: "tv" as const },
    { id: "25", title: "The Investigation", image: tvDrama, rating: 4, year: "2024", type: "tv" as const },
    { id: "26", title: "True Detective", image: tvDrama, rating: 5, year: "2024", type: "tv" as const },
  ];

  const sciFiShows = [
    { id: "30", title: "Space Odyssey", image: movieAction, rating: 5, year: "2024", type: "tv" as const },
    { id: "31", title: "Future World", image: movieAction, rating: 4, year: "2024", type: "tv" as const },
    { id: "32", title: "Time Travelers", image: movieAction, rating: 5, year: "2024", type: "tv" as const },
    { id: "33", title: "Alien Contact", image: movieAction, rating: 4, year: "2023", type: "tv" as const },
    { id: "34", title: "Quantum Leap", image: movieAction, rating: 5, year: "2024", type: "tv" as const },
    { id: "35", title: "Parallel Universe", image: movieAction, rating: 4, year: "2024", type: "tv" as const },
    { id: "36", title: "Cyberpunk", image: movieAction, rating: 5, year: "2024", type: "tv" as const },
  ];

  const comedyShows = [
    { id: "40", title: "Laugh Out Loud", image: tvDrama, rating: 5, year: "2024", type: "tv" as const },
    { id: "41", title: "Office Hours", image: tvDrama, rating: 4, year: "2024", type: "tv" as const },
    { id: "42", title: "Friends Forever", image: tvDrama, rating: 5, year: "2024", type: "tv" as const },
    { id: "43", title: "Sitcom Central", image: tvDrama, rating: 4, year: "2023", type: "tv" as const },
    { id: "44", title: "Comedy Club", image: tvDrama, rating: 5, year: "2024", type: "tv" as const },
    { id: "45", title: "Funny Business", image: tvDrama, rating: 4, year: "2024", type: "tv" as const },
    { id: "46", title: "Happy Days", image: tvDrama, rating: 5, year: "2024", type: "tv" as const },
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-[72px]">
      <div className="px-4 sm:px-6 md:px-12 py-6 sm:py-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-2">TV Shows</h1>
        <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">Binge-worthy series and episodes</p>
      </div>
      <ContentGrid title="Popular TV Shows" items={popularShows} />
      <ContentGrid title="Crime Dramas" items={crimeDramas} />
      <ContentGrid title="Sci-Fi & Fantasy" items={sciFiShows} />
      <ContentGrid title="Comedy Series" items={comedyShows} />
    </div>
  );
};

export default TVShowsPage;
