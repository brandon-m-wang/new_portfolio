export const HeaderText = ({ text, justifyEnd = false }) => {
  const classNames = justifyEnd
    ? "justify-self-end lg:mr-28 md:mr-15 mr-10 lg:text-right"
    : "";
  return (
    <i className={classNames}>
      <h2 className="text-primary font-futura sm:text-5xl text-4xl font-medium mb-16">
        {text}
      </h2>
    </i>
  );
};
