import { Card } from "../../molecules/Card/Card"

export const Benefits = () => {
  return (
    <section className="mx-40 my-20">
       <blockquote>
            <h1 className="text-center font-medium text-3xl mb-4">Why should you <span className="text-pink-400">adopt</span> a cat ?</h1>
            <p className="text-gray-600 mb-8 leading-loose">According to Research Gate, owning a cat, or any pet you adopt from a shelter, has been shown to have positive effects on humans' ability to cope with stress, anxiety, depression, and loneliness. Taking a cat home from a shelter can improve your sense of happiness and general well-being.</p>
       </blockquote>
       <article className="grid grid-cols-3 gap-10">
        <Card color="pink">
          <h1 className="font-medium text-xl mb-2">You will change their life</h1>
          <p className="font-normal">More than change this cat's life, you give them life. And you get a new best friend.</p>
        </Card>
        <Card color="white">
          <h1 className="font-medium text-xl mb-2">You will get a <span className="text-pink-400">great friend</span></h1>
          <p className="font-normal text-gray-600">You could find a playful, active cat or a calmer feline who prefers cuddling and a quieter environment.</p>
        </Card>
        <Card color="white">
          <h1 className="font-medium text-xl mb-2">Heart <span className="text-pink-400">healthy</span></h1>
          <p className="font-normal text-gray-600">A rescue cat or pet can be heart-healthy as well.  Cats can relieve stress and lower blood pressure.</p>
        </Card>
       </article>
    </section>
  )
}
