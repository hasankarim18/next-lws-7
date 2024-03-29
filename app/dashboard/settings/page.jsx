import Button from "@/app/components/Button";
import SortProducts from "@/app/components/SortProducts";

export const metadata = {
  title: "Settings",
  description: "Dashboard settings section",
};

export default function Settings() {
  return (
    <div>
      <h1 className="text-2xl">Settings page</h1>
      <p className="mt-10">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo rem
        dolorem commodi illo at sequi, esse nulla voluptatum laudantium
        dignissimos exercitationem! Voluptates repudiandae facilis sapiente
        voluptatum maxime ullam animi repellendus.
      </p>
      <div className="mt-4">
        <Button
          varient="danger"
          path="/dashboard/analytics"
          className="rounded-md"
        >
          Routing button / Go to analytices
        </Button>
      </div>
      <div className="mt-4">
        <SortProducts />
      </div>
    </div>
  );
}
