const FlexLayout = ({ children }) => {
  return (
    <div className="flex flex-col gap-[8rem] lg:gap-[12rem]">{children}</div>
  );
};

export default FlexLayout;
