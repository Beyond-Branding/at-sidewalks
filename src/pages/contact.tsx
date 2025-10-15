export function ContactForm() {
  return (
    <div className="mx-auto container">
      <div className="mx-auto max-w-[55ch]">
        <h3 className="mb-6 font-medium text-3xl uppercase">Contact us</h3>
        <p className="mb-6">
          If you have any query about your order or anything else, please don’t
          hesitate to contact us using the form below. Alternatively, you can
          contact us using our email - studiossakuranbo@gmail.com
        </p>
        <p>
          Please kindly do not send multiple emails regarding the same query.
          This can cause delays in replying to you <br /> ⭐️
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-[720px]">
        <form className="gap-4 grid grid-cols-2">
          <div className="w-full">
            <input placeholder="Name" className="px-4 py-2 border-1 w-full" />
          </div>
          <div>
            <input placeholder="Email*" className="px-4 py-2 border-1 w-full" />
          </div>
          <div className="col-span-2">
            <textarea
              placeholder="Comment"
              className="px-4 py-2 border-1 w-full h-24"
            />
          </div>

          <div className="flex justify-start col-span-2">
            <button className="bg-white px-6 py-2">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <section className="mx-auto px-8 pt-12 text-center container">
      <div className="mx-auto mb-16 max-w-[55ch]">
        <h2 className="mb-8 font-medium text-3xl uppercase">Contact Us</h2>
        <p>
          We love getting emails from readers. Please feel free to write to
          Joanna at <span className="font-medium">hello@cupofjo.com</span>. If
          you have a question, you can also take a look at our FAQ page — the
          answer may be waiting there for you.
        </p>
      </div>

      <div className="mx-auto mb-16 max-w-[55ch]">
        <h2 className="mb-8 font-medium text-3xl uppercase">
          ADVERTISING & PARTNERSHIPS
        </h2>
        <p>
          We love working with brands and businesses and are happy to create
          partnerships of all shapes and sizes. Please email{" "}
          <span className="font-medium">maureen@cupofjo.com</span>
          for our media kit.
        </p>
      </div>

      <div className="mx-auto mb-16 max-w-[55ch]">
        <h2 className="mb-8 font-medium text-3xl uppercase">
          ADVERTISING & PARTNERSHIPS
        </h2>
        <p>
          We love working with brands and businesses and are happy to create
          partnerships of all shapes and sizes. Please email{" "}
          <span className="font-medium">maureen@cupofjo.com</span>
          for our media kit.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
