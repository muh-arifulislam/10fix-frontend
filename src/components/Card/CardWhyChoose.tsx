const CardWhyChoose = () => {
  return (
    <div className="rounded-md border border-white p-8 text-center shadow relative">
      <div
        className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
        style={{
          backgroundImage: "linear-gradient(#E93D3D 0%, #E93D3D 100%)",
          borderColor: "#E93D3D",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-color-swatch"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
          <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
          <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
          <line x1="17" y1="17" x2="17" y2="17.01"></line>
        </svg>
      </div>
      <h3 className="mt-6 text-white">Customizable</h3>
      <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-white">
        Tailor your landing page's look and feel, from the color scheme to the
        font size, to the design of the page.
      </p>
    </div>
  );
};

export default CardWhyChoose;
