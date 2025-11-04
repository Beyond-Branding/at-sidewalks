export interface ButtonProps {
  children: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
  return (
    <button className="bg-white hover:brightness-90 px-7 border-[0.25px] border-gray-300 rounded-full font-sm font-light text-black cursor-pointer">
      {children}
    </button>
  );
}
