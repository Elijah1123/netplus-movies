import ContentCard from "./ContentCard";

interface Content {
  id: string;
  title: string;
  image: string;
  rating: number;
  year?: string;
  type?: "movie" | "tv" | "anime";
  isNew?: boolean;
}

interface ContentGridProps {
  title: string;
  items: Content[];
}

const ContentGrid = ({ title, items }: ContentGridProps) => {
  return (
    <section className="py-6 md:py-8">
      <div className="px-4 md:px-12">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 text-white">{title}</h2>
        <div className="content-row -mx-4 px-4 md:mx-0 md:px-0">
          {items.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px]">
              <ContentCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentGrid;
