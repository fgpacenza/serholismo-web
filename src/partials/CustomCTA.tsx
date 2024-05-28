const CustomCTA = () => (
  <div className="flex items-center justify-center p-12">
    <div className="mx-auto w-full max-w-[550px]">
      <form action="https://submit-form.com/ZrsyovVug">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-white"
          >
            Nombre
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-white"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@domain.com"
            className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="phoneNumber"
            className="mb-3 block text-base font-medium text-white"
          >
            Teléfono
          </label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="XXX-XX-XX-XX"
            className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-3 block text-base font-medium text-white"
          >
            Mensaje
          </label>
          <textarea
            rows={4}
            name="message"
            id="message"
            placeholder="Deje su mensaje aquí..."
            className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            required
          ></textarea>
        </div>
        <div>
          <button className="rounded-md bg-[#6A64F1] px-8 py-3 text-base font-semibold text-white outline-none hover:shadow">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
);

export { CustomCTA };
