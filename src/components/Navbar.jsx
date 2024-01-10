const data = [
  {
    name: 'About',
    id: 1
  },
  {
    name: 'Works',
    id: 2
  },
  {
    name: 'Contact',
    id: 3
  }
]

export const Navbar = () => {
  const scrollToDiv = (divId) => {
    const element = document.getElementById(divId)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
  return (
    <nav className="w-full bg-neutral-900 text-neutral-100 fixed top-0 z-40">
      <ul className="flex justify-evenly ">
        {data.map((x) => (
          <li
            key={x.id}
            onClick={() => {
              scrollToDiv(x.name.toLocaleLowerCase())
            }}
            className="p-5 font-bold cursor-pointer hover:scale-125 transition-transform duration-300"
          >
            <h5>{x.name}</h5>
          </li>
        ))}
      </ul>
    </nav>
  )
}
