export const Button = ({ text, selected }) => {
  return selected ? (
    <div className="rounded-full font-open-sans w-24 cursor-pointer select-none text-center text-highlight text-sm font-regular border-2 border-highlight">
      <i>{text}</i>
    </div>
  ) : (
    <div className="rounded-full font-open-sans w-24 cursor-pointer select-none text-center text-sm text-primary font-regular border-2 border-primary">
      <i>{text}</i>
    </div>
  );
};
