import CustomLink from "../components/CustomLink";

const sidebarLinks = [
  {
    label: "Settings",
    link: "/dashboard/settings",
  },
  {
    label: "analytics",
    link: "/dashboard/analytics",
  },
  {
    label: "admin",
    link: "/dashboard/admin",
  },
  {
    label: "about admin",
    link: "/dashboard/admin#aboutAdmin",
  },
];

export default function Sidebar() {
  return (
    <div>
      <CustomLink
        path="/dashboard"
        className={`text-3xl block
        
         hover:text-rose-500
         font-bold mb-2 border-b-2 text-right        
         `}
      >
        Sidebar{" "}
      </CustomLink>
      <ul className="flex flex-col justify-end items-end">
        {sidebarLinks.map((link, i) => (
          <CustomLink key={i} path={link.link}>
            {link.label}
          </CustomLink>
        ))}
        {/* <li className="mb-4 border-b-2 text-xl text-right">Analytics</li>
        <li className="mb-4 border-b-2 text-xl text-right">Settings</li>
        <li className="mb-4 border-b-2 text-xl text-right">Admin</li>
        <li className="mb-4 border-b-2 text-xl text-right">Link 4</li> */}
      </ul>
    </div>
  );
}
