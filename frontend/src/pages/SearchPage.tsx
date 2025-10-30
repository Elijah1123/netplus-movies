import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import ContentCard from "@/components/ContentCard";
import movieAction from "@/assets/movie-action.jpg";
import animeShow from "@/assets/anime-show.jpg";
import tvDrama from "@/assets/tv-drama.jpg";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

  // Mock search results - ready for API integration
  const allContent = [
    { id: "1", title: "Action Fury", image: movieAction, rating: 5, year: "2024", type: "movie" as const },
    { id: "2", title: "Dark Shadows", image: tvDrama, rating: 4, year: "2024", type: "movie" as const },
    { id: "7", title: "Mystery Lane", image: tvDrama, rating: 5, year: "2024", type: "tv" as const },
    { id: "13", title: "Dragon Saga", image: animeShow, rating: 5, year: "2024", type: "anime" as const },
    { id: "14", title: "Spirit Warriors", image: animeShow, rating: 5, year: "2024", type: "anime" as const },
  ];

  const filteredResults = searchQuery
    ? allContent.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allContent;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: searchQuery });
  };

  useEffect(() => {
    const query = searchParams.get("q");
    if (query) setSearchQuery(query);
  }, [searchParams]);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-heading font-bold mb-6">Search</h1>
          <form onSubmit={handleSearch}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for movies, TV shows, or anime..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg bg-secondary border-border"
              />
            </div>
          </form>
        </div>

        <div>
          <p className="text-muted-foreground mb-6">
            {searchQuery
              ? `${filteredResults.length} results for "${searchQuery}"`
              : "Start typing to search"}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filteredResults.map((item) => (
              <ContentCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
