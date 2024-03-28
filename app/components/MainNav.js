import CustomLink from "./CustomLink";

const navLinks = [
  {
    label: "home",
    link: "/",
  },

  {
    label: "dashboard",
    link: "/dashboard",
  },
];

export default function MainNav() {
  return (
    <nav className="flex justify-between border-2 border-transparent border-b-gray-500 py-4">
      <span>RootLayout</span>
      <ul className="flex gap-4">
        {navLinks.map((link, i) => (
          <li key={i}>
            <CustomLink path={link.link}>{link.label} </CustomLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
