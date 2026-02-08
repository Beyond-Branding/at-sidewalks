export default function BlogBanner({
  blog,
  author,
  coverImage,
}: {
  blog: any;
  author: any;
  coverImage: string;
}) {
  return (
    <section
      id="hero-section"
      className="mx-auto px-8 pt-8 min-h-screen container"
    >
      <div className="place-items-center grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 w-full h-full">
        <div className="w-full h-full bg">
          <div className="w-full h-full">
            <img
              className="w-full h-auto object-contain"
              src={coverImage}
              width={4697}
              height={6576}
              alt="Blog Banner"
            />
          </div>
        </div>
        <div className="p-8">
          <div className="space-y-8">
            <div>
              <h2
                className="mb-2 font-medium text-3xl"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                  __html: blog?.title?.rendered || "",
                }}
              ></h2>
              <div
                className="max-w-none text-xl prose prose-neutral"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                  __html: blog?.excerpt?.rendered || "",
                }}
              />
            </div>
            <div>
              <p>{author?.name}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
