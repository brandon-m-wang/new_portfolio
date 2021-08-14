import { FilterButton } from "./filter-button";

export const ProjectFilters = ({ selected, handler }) => {
  return (
    <div className="flex sm:flex-row flex-col gap-y-2 sm:gap-y-0 gap-x-2 -mt-10">
      <FilterButton
        text="all projects"
        selected={selected === "all projects"}
        handler={handler}
      />
      <FilterButton
        text="hackathon"
        selected={selected === "hackathon"}
        handler={handler}
      />
      <FilterButton
        text="live site"
        selected={selected === "live site"}
        handler={handler}
      />
    </div>
  );
};
