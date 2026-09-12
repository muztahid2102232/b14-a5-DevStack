
const TechCard = ({tech}) => {
    return (
      <>
        <div className="card w-full max-w-125 rounded-3xl border border-base-200 bg-base-100 shadow-sm">
          <div className="card-body p-8">
            {/* Top: Icon + Badge */}
            <div className="flex items-start justify-between">
              {/* Technology Icon */}
              <img
                src={tech.icon}
                alt={`${tech.name} logo`}
                className="h-14 w-14 object-contain"
              />

              {/* Popular Badge */}
              {tech.badge && (
                <div className="badge badge-lg rounded-full border border-info/20 bg-info/10 px-5 py-5 text-base font-medium text-info">
                  {tech.badge}
                </div>
              )}
            </div>

            {/* Technology Name */}
            <h2 className="mt-8 text-3xl font-bold text-base-content">
              {tech.name}
            </h2>

            {/* Description */}
            <p className="mt-2 min-h-24 text-lg leading-9 text-base-content/60">
              {tech.description}
            </p>

            {/* Divider */}
            <div className="my-2 h-px w-full bg-base-200"></div>

            {/* Category + Difficulty + Rating */}
            <div className="flex items-center justify-between gap-4">
              {/* Category */}
              <span className="badge badge-lg border-none bg-base-200 px-4 py-5 text-base text-base-content/70">
                {tech.category}
              </span>

              {/* Difficulty */}
              <span className="text-base font-medium text-base-content/60">
                {tech.difficulty}
              </span>

              {/* Rating */}
              <span className="flex items-center gap-2 text-lg font-medium">
                <span className="text-warning">★</span>
                <span>{tech.rating}</span>
              </span>
            </div>

            {/* Button */}
            <button className="btn mt-5 h-15 rounded-xl border-none bg-neutral text-lg font-normal text-neutral-content hover:bg-neutral/90">
              Add to Stack
            </button>
          </div>
        </div>
      </>
    );
};

export default TechCard;