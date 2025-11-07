export interface AboutContentProps {
  content: string;
}

export function AboutContent({ content }: AboutContentProps) {
  return (
    <div className="mx-auto py-10 max-w-[70rem] container">
      <div className="flex md:flex-row flex-col justify-center items-center md:gap-8 space-y-4 mx-auto px-8">
        <div className="flex-[30%] mx-auto aspect-[9/16] shrink-0">
          <img
            src="/assets/author.jpg"
            className="size-full object-contain"
            alt=""
          />
        </div>

        <div
          className="flex-[70%]"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        ></div>
      </div>
    </div>
  );
}
