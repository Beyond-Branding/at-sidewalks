export function AboutContent() {
  return (
    <div className="mx-auto mt-12 py-12 h-[60vh] text-center container">
      <div className="flex flex-1/2 justify-center items-center gap-4 space-y-4 mx-auto px-8 h-full overflow-y-hidden">
        <div className="mx-auto overflow-hidden shrink-0">
          <img
            src="/assets/author.jpg"
            className="size-full object-contain"
            alt=""
          />
        </div>

        <div className="flex-1/2">
          <p>My Story 🌸</p>

          <p>
            I&apos;m often asked why I started this blog, and for the longest
            time, I tried to come up with something clever — a story that
            sounded smart, maybe even impressive. But the truth is much simpler
            than that.
          </p>
        </div>
      </div>
    </div>
  );
}
