import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="grid grid-cols-12 gap-2 p-4 mt-4 border-2 justify-between border-red-500">
      <p className="text-red-500 col-span-12">Dashbord layout</p>
      {/* layout children */}
      <div className="col-span-8">{children}</div>
      <div className="col-span-4">
        <h2 className="text-2xl">
          <Sidebar />
        </h2>
      </div>
    </div>
  );
}
