export const FilterButton = ({ text, selected, handler }) => {
  return selected ? (
    <div className="rounded-full font-open-sans w-24 cursor-pointer select-none text-center text-secondary bg-highlight sm:text-sm text-xs font-semibold border-2 border-highlight">
      <i className="pointer-events-none">{text}</i>
    </div>
  ) : (
    <div
      onClick={() => {
        handler(text);
      }}
      className="rounded-full font-open-sans w-24 cursor-pointer select-none text-center sm:text-sm text-xs text-primary hover:text-highlight hover:border-highlight font-semibold border-2 border-primary"
    >
      <i className="pointer-events-none">{text}</i>
    </div>
  );
};
