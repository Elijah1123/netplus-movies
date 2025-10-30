import { User, Settings, Heart, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContentCard from "@/components/ContentCard";
import movieAction from "@/assets/movie-action.jpg";
import animeShow from "@/assets/anime-show.jpg";
import tvDrama from "@/assets/tv-drama.jpg";

const ProfilePage = () => {
  // Mock user data - ready for API integration
  const userData = {
    name: "John Doe",
    email: "john.doe@email.com",
    memberSince: "2024",
    plan: "Premium",
  };

  // Mock favorites and watchlist
  const favorites = [
    { id: "1", title: "Action Fury", image: movieAction, rating: 5, year: "2024" },
    { id: "13", title: "Dragon Saga", image: animeShow, rating: 5, year: "2024" },
    { id: "7", title: "Mystery Lane", image: tvDrama, rating: 5, year: "2024" },
  ];

  const watchlist = [
    { id: "2", title: "Dark Shadows", image: tvDrama, rating: 4, year: "2024" },
    { id: "14", title: "Spirit Warriors", image: animeShow, rating: 5, year: "2024" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-netplus-red to-netplus-silver flex items-center justify-center text-white text-4xl font-bold shadow-glow-red">
            {userData.name.charAt(0)}
          </div>

          <div className="flex-1">
            <h1 className="text-4xl font-heading font-bold mb-2">{userData.name}</h1>
            <p className="text-muted-foreground mb-4">{userData.email}</p>
            
            <div className="flex flex-wrap gap-4 text-sm mb-6">
              <div className="px-4 py-2 bg-secondary rounded-lg">
                <span className="text-muted-foreground">Member Since:</span>{" "}
                <span className="font-semibold">{userData.memberSince}</span>
              </div>
              <div className="px-4 py-2 bg-netplus-red/10 text-netplus-red rounded-lg border border-netplus-red/20">
                <span className="font-semibold">{userData.plan} Plan</span>
              </div>
            </div>

            <Button variant="secondary" className="gap-2">
              <Settings className="h-4 w-4" />
              Edit Profile
            </Button>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="favorites" className="w-full">
          <TabsList className="w-full md:w-auto">
            <TabsTrigger value="favorites" className="gap-2">
              <Heart className="h-4 w-4" />
              Favorites
            </TabsTrigger>
            <TabsTrigger value="watchlist" className="gap-2">
              <Clock className="h-4 w-4" />
              Watchlist
            </TabsTrigger>
          </TabsList>

          <TabsContent value="favorites" className="mt-8">
            <div className="mb-4">
              <h2 className="text-2xl font-heading font-bold">My Favorites</h2>
              <p className="text-muted-foreground">
                {favorites.length} {favorites.length === 1 ? "title" : "titles"}
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {favorites.map((item) => (
                <ContentCard key={item.id} {...item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="watchlist" className="mt-8">
            <div className="mb-4">
              <h2 className="text-2xl font-heading font-bold">My Watchlist</h2>
              <p className="text-muted-foreground">
                {watchlist.length} {watchlist.length === 1 ? "title" : "titles"}
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {watchlist.map((item) => (
                <ContentCard key={item.id} {...item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfilePage;
