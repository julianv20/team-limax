import image3 from '../assets/image3.jpeg'
import { TypeAnimation } from 'react-type-animation'

export const About = () => {
  return (
    <section
      className="bg-slate-600 flex  lg:mt-16 overflow-hidden h-screen lg:h-[calc(100vh-4rem)]"
      id="about"
    >
      <div className="w-full h-full flex items-center flex-col md:flex-row ">
        <img
          src={image3}
          alt="image1"
          className="aspect-[4/3] h-full w-full md:w-1/2 lg:w-2/3 object-cover"
        />
        <div className="p-5">
          <p className="font-mono  text-neutral-100">
            <span className="text-2xl font-bold text-neutral-100">
              <TypeAnimation
                sequence={['Team Limax']}
                speed={180}
                wrapper="span"
                repeat={0}
              />
            </span>{' '}
            is a company dedicated to assisting you in finding the best real
            estate investments and facilitating the buying and selling of your
            dream home. Our commitment is to provide specialized guidance,
            ensuring you make informed decisions to achieve your real estate
            goals. Whether you're interested in strategic investments or
            discovering the perfect home, Team Limax is here to turn your dreams
            into reality. Explore a world of real estate possibilities with us.
          </p>
        </div>
      </div>
    </section>
  )
}
