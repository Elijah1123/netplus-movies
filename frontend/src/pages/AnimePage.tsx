import ContentGrid from "@/components/ContentGrid";
import animeShow from "@/assets/anime-show.jpg";

const AnimePage = () => {
  const trendingAnime = [
    { id: "13", title: "Dragon Saga", image: animeShow, rating: 5, year: "2024", type: "anime" as const },
    { id: "14", title: "Spirit Warriors", image: animeShow, rating: 5, year: "2024", type: "anime" as const },
    { id: "15", title: "Cyber Knights", image: animeShow, rating: 4, year: "2023", type: "anime" as const },
    { id: "16", title: "Magic Academy", image: animeShow, rating: 5, year: "2024", type: "anime" as const },
    { id: "17", title: "Stellar Dreams", image: animeShow, rating: 5, year: "2024", type: "anime" as const },
    { id: "18", title: "Dark Dimension", image: animeShow, rating: 4, year: "2024", type: "anime" as const },
    { id: "19", title: "Ninja Legends", image: animeShow, rating: 5, year: "2024", type: "anime" as const },
  ];

  const actionAnime = [
    { id: "20", title: "Battle Force", image: animeShow, rating: 5, year: "2024", type: "anime" as const },
    { id: "21", title: "Ultimate Fighter", image: animeShow, rating: 4, year: "2024", type: "anime" as const },
    { id: "22", title: "Sword Master", image: animeShow, rating: 5, year: "2024", type: "anime" as const },
    { id: "23", title: "Power Rangers", image: animeShow, rating: 4, year: "2023", type: "anime" as const },
    { id: "24", title: "Hero Academia", image: animeShow, rating: 5, year: "2024", type: "anime" as const },
    { id: "25", title: "Demon Slayer", image: animeShow, rating: 5, year: "2024", type: "anime" as const },
    { id: "26", title: "Attack Force", image: animeShow, rating: 4, year: "2024", type: "anime" as const },
  ];

  const fantasyAnime = [
    { id: "30", title: "Mystic Realm", image: animeShow, rating: 5, year: "2024", type: "anime" as const },
    { id: "31", title: "Fantasy World", image: animeShow, rating: 4, year: "2024", type: "anime" as const },
    { id: "32", title: "Magical Girl", image: animeShow, rating: 5, year: "2024", type: "anime" as const },
    { id: "33", title: "Fairy Tale", image: animeShow, rating: 4, year: "2023", type: "anime" as const },
    { id: "34", title: "Dragon Quest", image: animeShow, rating: 5, year: "2024", type: "anime" as const },
    { id: "35", title: "Wizard Chronicles", image: animeShow, rating: 4, year: "2024", type: "anime" as const },
    { id: "36", title: "Kingdom Hearts", image: animeShow, rating: 5, year: "2024", type: "anime" as const },
  ];

  const romanceAnime = [
    { id: "40", title: "Love Story", image: animeShow, rating: 5, year: "2024", type: "anime" as const },
    { id: "41", title: "Your Name", image: animeShow, rating: 5, year: "2024", type: "anime" as const },
    { id: "42", title: "Romantic Comedy", image: animeShow, rating: 4, year: "2024", type: "anime" as const },
    { id: "43", title: "School Days", image: animeShow, rating: 4, year: "2023", type: "anime" as const },
    { id: "44", title: "First Love", image: animeShow, rating: 5, year: "2024", type: "anime" as const },
    { id: "45", title: "Sweet Dreams", image: animeShow, rating: 4, year: "2024", type: "anime" as const },
    { id: "46", title: "Love & War", image: animeShow, rating: 5, year: "2024", type: "anime" as const },
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-[72px]">
      <div className="px-4 sm:px-6 md:px-12 py-6 sm:py-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-2">Anime</h1>
        <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">Discover the best anime series and films</p>
      </div>
      <ContentGrid title="Trending Anime" items={trendingAnime} />
      <ContentGrid title="Action & Adventure Anime" items={actionAnime} />
      <ContentGrid title="Fantasy Anime" items={fantasyAnime} />
      <ContentGrid title="Romance Anime" items={romanceAnime} />
    </div>
  );
};

export default AnimePage;
