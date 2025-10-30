import ContentGrid from "@/components/ContentGrid";
import tvDrama from "@/assets/tv-drama.jpg";
import animeShow from "@/assets/anime-show.jpg";

const SeriesPage = () => {
  // Mock data for series content
  const dramaSeries = [
    { id: "s1", title: "Mystery Lane", image: tvDrama, rating: 5, year: "2024", type: "tv" as const, isNew: true },
    { id: "s2", title: "Corporate Battles", image: tvDrama, rating: 4, year: "2024", type: "tv" as const },
    { id: "s3", title: "Midnight Stories", image: tvDrama, rating: 5, year: "2023", type: "tv" as const, isNew: true },
    { id: "s4", title: "Urban Legends", image: tvDrama, rating: 4, year: "2024", type: "tv" as const },
    { id: "s5", title: "The Syndicate", image: tvDrama, rating: 5, year: "2024", type: "tv" as const, isNew: true },
    { id: "s6", title: "Final Days", image: tvDrama, rating: 4, year: "2024", type: "tv" as const },
    { id: "s7", title: "Breaking Point", image: tvDrama, rating: 5, year: "2024", type: "tv" as const, isNew: true },
    { id: "s8", title: "Silent Echo", image: tvDrama, rating: 4, year: "2023", type: "tv" as const },
  ];

  const animeSeries = [
    { id: "a1", title: "Dragon Saga", image: animeShow, rating: 5, year: "2024", type: "anime" as const, isNew: true },
    { id: "a2", title: "Spirit Warriors", image: animeShow, rating: 5, year: "2024", type: "anime" as const },
    { id: "a3", title: "Cyber Knights", image: animeShow, rating: 4, year: "2023", type: "anime" as const, isNew: true },
    { id: "a4", title: "Magic Academy", image: animeShow, rating: 5, year: "2024", type: "anime" as const },
    { id: "a5", title: "Stellar Dreams", image: animeShow, rating: 5, year: "2024", type: "anime" as const, isNew: true },
    { id: "a6", title: "Dark Dimension", image: animeShow, rating: 4, year: "2024", type: "anime" as const },
    { id: "a7", title: "Soul Eater", image: animeShow, rating: 5, year: "2024", type: "anime" as const, isNew: true },
    { id: "a8", title: "Hero Chronicles", image: animeShow, rating: 4, year: "2023", type: "anime" as const },
  ];

  const comedySeries = [
    { id: "c1", title: "Laugh Factory", image: tvDrama, rating: 4, year: "2024", type: "tv" as const, isNew: true },
    { id: "c2", title: "Office Shenanigans", image: tvDrama, rating: 5, year: "2024", type: "tv" as const },
    { id: "c3", title: "Neighborhood Tales", image: tvDrama, rating: 4, year: "2023", type: "tv" as const },
    { id: "c4", title: "Family Matters", image: tvDrama, rating: 5, year: "2024", type: "tv" as const, isNew: true },
    { id: "c5", title: "Campus Life", image: tvDrama, rating: 4, year: "2024", type: "tv" as const },
    { id: "c6", title: "Roommates", image: tvDrama, rating: 5, year: "2024", type: "tv" as const, isNew: true },
    { id: "c7", title: "Late Night Show", image: tvDrama, rating: 4, year: "2023", type: "tv" as const },
    { id: "c8", title: "Stand Up Stories", image: tvDrama, rating: 5, year: "2024", type: "tv" as const },
  ];

  const thrillerSeries = [
    { id: "t1", title: "Dark Waters", image: tvDrama, rating: 5, year: "2024", type: "tv" as const, isNew: true },
    { id: "t2", title: "Mind Games", image: tvDrama, rating: 5, year: "2024", type: "tv" as const },
    { id: "t3", title: "The Chase", image: tvDrama, rating: 4, year: "2023", type: "tv" as const, isNew: true },
    { id: "t4", title: "Criminal Mind", image: tvDrama, rating: 5, year: "2024", type: "tv" as const },
    { id: "t5", title: "Shadows", image: tvDrama, rating: 4, year: "2024", type: "tv" as const, isNew: true },
    { id: "t6", title: "Hidden Truth", image: tvDrama, rating: 5, year: "2024", type: "tv" as const },
    { id: "t7", title: "The Detective", image: tvDrama, rating: 4, year: "2023", type: "tv" as const, isNew: true },
    { id: "t8", title: "Cold Case", image: tvDrama, rating: 5, year: "2024", type: "tv" as const },
  ];

  return (
    <div className="min-h-screen pt-32 pb-12">
      <div className="px-4 md:px-12 mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">Series</h1>
        <p className="text-muted-foreground">Binge-worthy series across all genres</p>
      </div>
      
      <ContentGrid title="Drama Series" items={dramaSeries} />
      <ContentGrid title="Anime Series" items={animeSeries} />
      <ContentGrid title="Comedy Series" items={comedySeries} />
      <ContentGrid title="Thriller Series" items={thrillerSeries} />
    </div>
  );
};

export default SeriesPage;
