import Image from "next/image";

export function BlogBanner() {
  return (
    <section
      id="hero-section"
      className="mx-auto px-8 pt-8 min-h-screen container"
    >
      <div className="place-items-center grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 w-full h-full">
        <div className="w-full h-full bg">
          <div className="w-full h-full">
            <Image
              className="w-auto h-full"
              src="/assets/blog.jpg"
              width={4697}
              height={6576}
              alt="Blog Banner"
            />
          </div>
        </div>
        <div>
          <div className="space-y-8">
            <div>
              <h2 className="font-medium text-3xl">Wanying Liang</h2>
              <p>Art inspired by emotions and nature</p>
            </div>
            <div>
              <p>-</p>
            </div>
            <div>
              <p>BY HENRY WE</p>
            </div>

            <div>
              <a href="#">https://www.ting-ying.com/wang-liang</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BlogContent() {
  return (
    <section>
      <div className="mx-auto px-8 py-8 max-w-3xl text-sm container">
        <h3 className="mb-3">What are the core elements of your work?</h3>
        <p className="mb-4">
          I use a lot of what people consider as ‘decorative’ flora and fauna in
          my work. For me, it is not only the way I mimic nature through the
          repetition of these images, but I find it represents my thoughts and
          emotions as well: love, hate, confusion, sadness, fear. All of these
          feelings I accumulate in my mind and can become a millstone around my
          neck. Making clay is how I digest and process these emotions.
        </p>

        <p className="mb-4">
          Our emotions are alive and can grow quickly, even faster than we can
          control. Sometimes, our strong feelings about certain things
          hibernate, and all of a sudden, they wake up. I take these feelings as
          babies: they cry, go to bed, wake up, and cry again. Alternatively,
          these feelings are like plants: they grow quickly in warm seasons and
          stop developing in cold winter. It is not easy to deal with these
          impenetrable emotions.
        </p>
        <p className="mb-4">
          When I am working with clay, I can feel relief from the burden of all
          of these heavy emotions. The emotions that I cannot understand become
          decorations and the details in my work. Making these endless
          decorative details is how I deal with my feelings and how I
          communicate with others about my unsolved confusions. The more
          complicated emotions I have, the more decorative details I will
          create.
        </p>
        <p className="mb-4">
          Besides, I want to create tension between the external visual beauty
          and internal anxiety. I often feel a little unsafe when I am in a room
          full of ornaments and I do not know what triggers those unpleasant
          feelings; therefore, I decided to play with that in my work. Our eyes
          love decoration for its visual pleasure, but too much decoration
          creates anxiety too. Thus, my repetitive decorative details help to
          create this tension in my work.
        </p>
        <p className="mb-4">
          ‍Are there any other art forms that you would like to explore?
        </p>
        <p className="mb-4">
          I am a person who dreams a lot in sleep. Some of the dreams are very
          fancy, unforgettable, and mysterious. They are the nourishment of my
          art. One of the most intriguing parts of my dreams is a unique
          atmosphere. I think installation art might be an excellent way to
          represent the indescribable ambiances in my dreams, which could change
          the mood of the exhibition space. Therefore, the installation might be
          the art form that I want to keep exploring besides ceramics.
        </p>
        <p className="mb-4">
          Actually, I tried an installation art format for my thesis show at
          Alfred University. In that show, I used a lot of paper strips hanging
          from the ceiling to create a space with a sense of ritual. That was an
          incredible experience and truly opened my mind. I would like to try
          different ways to create show space in the future. I believe that
          installation art will add more strength and depth of understandings to
          my ceramic pieces
        </p>
      </div>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 px-8 py-8 container">
        <div className="w-full h-full">
          <Image
            className="w-auto h-full"
            src="/assets/blog.jpg"
            width={4697}
            height={6576}
            alt="Blog Banner"
          />
        </div>
        <div className="w-full h-full">
          <Image
            className="w-auto h-full"
            src="/assets/blog.jpg"
            width={4697}
            height={6576}
            alt="Blog Banner"
          />
        </div>
      </div>
    </section>
  );
}

export function MoreStories() {
  return (
    <section className="mx-auto px-8 py-24 container">
      <h2 className="mb-12 text-2xl italic">more stories</h2>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
        <div>
          <div className="w-full h-fit">
            <Image
              className="w-full h-auto object-cover"
              src="/assets/story.jpg"
              alt="Story"
              width={500}
              height={333}
            />
          </div>

          <div className="space-y-2 mt-6">
            <h4 className="font-medium">Stray Gods</h4>
            <p>On Creating a diverse and inovative art form in gaming</p>
          </div>
        </div>
        <div>
          <div className="w-full h-fit">
            <Image
              className="w-full h-auto object-cover"
              src="/assets/story.jpg"
              alt="Story"
              width={500}
              height={333}
            />
          </div>

          <div className="space-y-2 mt-6">
            <h4 className="font-medium">Stray Gods</h4>
            <p>On Creating a diverse and inovative art form in gaming</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BlogPage() {
  return (
    <div>
      <BlogBanner />
      <BlogContent />
      <MoreStories />
    </div>
  );
}
