function HeaderSection({ children }) {
  return (
    <div className="flex justify-center">
      <div className="rounded-full bg-[#FDCB04] py-2 px-3 text-black font-extrabold text-lg {}">
        {children}
      </div>
    </div>
  );
}

export default HeaderSection;
