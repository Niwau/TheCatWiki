
export const Hero = () => {
  return (
    <section className="grid grid-cols-2 mx-40 justify-between gap-20 items-center outline outline-1 p-12">
      <main className="flex flex-col gap-5">
        <blockquote>
          <h1 className="font-medium text-5xl leading-snug mb-4">Find information about your favorite <span className="text-pink-400">cat breed</span></h1>
          <p className="text-zinc-600 text leading-loose">You can search for cat breeds to see pictures, images and other cool stuffs about cats.</p>
        </blockquote>
        <footer className="flex gap-4">
          <a className="hover:shadow-0.5 duration-300 outline outline-1 outline-black py-2 px-4 font-medium bg-pink-400 text-white" href="#breed-section">Explore</a>
          <a className="hover:shadow-0.5 duration-300 outline outline-1 outline-black py-2 px-4 font-medium text-black" href="https://github.com/Niwau" target="_blank">Github</a>
        </footer>
      </main>
      <figure>
        <img className="outline outline-1 shadow-1.5" src="CatHero.jpg"/>
      </figure>
    </section>
  )
}
