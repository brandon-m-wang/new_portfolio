import { Button } from "./button";

export const ProjectFilters = ({ selected }) => {
  return (
    <div className="flex gap-x-2">
      <Button text="all projects" selected={selected === "all"} />
      <Button text="hackathon" selected={selected === "hack"} />
      <Button text="live view" selected={selected === "live"} />
    </div>
  );
};
