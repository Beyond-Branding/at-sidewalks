export default function BlogContent({ content }: { content: string }) {
  return (
    <section>
      <div
        className="mx-auto px-8 py-8 max-w-3xl text-sm container blog-container"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></div>
    </section>
  );
}
