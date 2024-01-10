import { TypeAnimation } from 'react-type-animation'

import { images } from '..'

// lg:h-[calc(100vh-4rem)]
export const Works = () => {
  return (
    <section
      className="min-h-screen flex justify-center items-center flex-col  bg-neutral-800 p-5 md:p-0"
      id="works"
    >
      <h2 className="font-black text-3xl mb-0 text-neutral-100 text-center mt-10 md:mt-0 md:mb-10">
        <TypeAnimation
          sequence={[
            'Invest in the home of your dreams.',
            'Explore real estate opportunities.',
            'Find your perfect property.'
          ]}
          speed={180}
          wrapper="span"
          repeat={1}
        />
      </h2>
      <div className="mt-20 lg:mt-0 w-full md:w-9/12  xl:w-1/2 grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] justify-between gap-5">
        {images.map((image) => (
          <div key={image.id}>
            <img
              src={image.image}
              alt=""
              className="object-contain rounded-lg cursor-pointer"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
