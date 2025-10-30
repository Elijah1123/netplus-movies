import netflixIcon from "@/assets/netflix-icon.svg";

const OTTApps = () => {
  const apps = [
    { name: "Netflix", color: "from-red-600 to-red-700", icon: netflixIcon, hasIcon: true },
    { name: "Prime Video", color: "from-blue-500 to-blue-600", text: "prime video" },
    { name: "Disney+", color: "from-blue-600 to-blue-800", text: "Disney+" },
    { name: "JioHotstar", color: "from-purple-500 to-blue-500", text: "★" },
    { name: "HBO Max", color: "from-purple-700 to-purple-900", text: "HBO max" },
    { name: "Apple TV+", color: "from-gray-800 to-black", text: "tv+" },
    { name: "Hulu", color: "from-green-400 to-green-600", text: "hulu" },
    { name: "Paramount+", color: "from-blue-400 to-blue-600", text: "P+" },
  ];

  return (
    <section className="py-12 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl md:text-2xl font-medium text-foreground/80 mb-8">
          More OTT Apps Coming Soon
        </h2>
        <div className="flex flex-wrap gap-4 md:gap-6">
          {apps.map((app) => (
            <div
              key={app.name}
              className="group relative w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden transition-transform hover:scale-105 hover:shadow-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${app.color} flex items-center justify-center p-4`}>
                {app.hasIcon ? (
                  <img
                    src={app.icon}
                    alt={app.name}
                    className="w-16 h-16 object-contain"
                  />
                ) : (
                  <span className="text-white font-bold text-xl md:text-2xl text-center">
                    {app.text}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OTTApps;
