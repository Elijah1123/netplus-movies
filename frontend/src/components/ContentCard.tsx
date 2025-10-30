import { Play, Plus, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePlaylist } from "@/hooks/usePlaylist";
import { useToast } from "@/hooks/use-toast";

interface ContentCardProps {
  id: string;
  title: string;
  image: string;
  rating: number;
  year?: string;
  type?: "movie" | "tv" | "anime";
  isNew?: boolean;
}

const ContentCard = ({ id, title, image, rating, year, type = "movie", isNew = false }: ContentCardProps) => {
  const { addToPlaylist, removeFromPlaylist, isInPlaylist } = usePlaylist();
  const { toast } = useToast();
  const inPlaylist = isInPlaylist(id);

  const handlePlaylistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (inPlaylist) {
      removeFromPlaylist(id);
      toast({
        title: "Removed from playlist",
        description: `${title} has been removed from your playlist.`,
      });
    } else {
      addToPlaylist({ id, title, image, rating, year, type });
      toast({
        title: "Added to playlist",
        description: `${title} has been added to your playlist.`,
      });
    }
  };

  return (
    <div className="group content-card relative rounded overflow-hidden bg-black">
      <Link to={`/watch/${id}`}>
        <div className="relative aspect-[16/9] overflow-hidden">
          {/* Netflix Badge */}
          <div className="netflix-badge rounded-sm">N</div>
          
          {/* Recently Added Badge */}
          {isNew && (
            <div className="recently-added-badge rounded-sm">Recently added</div>
          )}
          
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="absolute bottom-0 left-0 right-0 p-3 space-y-2">
              <h3 className="text-white font-bold text-sm line-clamp-2">{title}</h3>
              
              <div className="flex items-center gap-2 text-xs text-white/90">
                {year && <span className="font-semibold">{year}</span>}
                <span className="px-1 border border-white/40 text-[10px]">16+</span>
                {type === "tv" ? <span>Seasons 1-3</span> : <span>2h 15m</span>}
              </div>

              <div className="flex gap-1.5 items-center">
                <Button size="sm" className="h-7 px-3 bg-white hover:bg-white/90 text-black font-semibold gap-1 text-xs rounded-sm">
                  <Play className="h-3 w-3 fill-current" />
                  Play
                </Button>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className={`h-7 w-7 rounded-full border hover:border-white bg-transparent hover:bg-white/10 ${
                    inPlaylist ? 'border-white bg-white/20' : 'border-white/50'
                  }`}
                  onClick={handlePlaylistToggle}
                  title={inPlaylist ? "Remove from playlist" : "Add to playlist"}
                >
                  {inPlaylist ? (
                    <Check className="h-4 w-4 text-white" />
                  ) : (
                    <Plus className="h-4 w-4 text-white" />
                  )}
                </Button>
                <Button size="icon" variant="ghost" className="h-7 w-7 rounded-full border border-white/50 hover:border-white bg-transparent hover:bg-white/10 ml-auto">
                  <ChevronDown className="h-4 w-4 text-white" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ContentCard;
