interface HeroCardProps {
  initials: string;
  name: string;
  title: string;
  description: string;
}

export function HeroCard({
  initials,
  name,
  title,
  description,
}: HeroCardProps) {
  return (
    <div
      id="about"
      className="sm:col-span-2 lg:col-span-2 row-span-2 bg-custom-black text-white p-6 sm:p-8 relative group">
      <div className="h-full flex flex-col justify-between">
        <div>
          <div className="w-12 h-12 bg-white/10 rounded-full mb-6 flex items-center justify-center text-sm font-medium">
            {initials}
          </div>
          <h2 className="text-2xl sm:text-3xl  mb-2 font-sans">{name}</h2>
          <p className="text-lg text-white/70 mb-4">{title}</p>
        </div>
        <p className="text-sm text-white/60 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
