"use client";
import RoutingButton from "@/app/components/RoutingButton";

// export const metadata = {
//   title: "Settings",
//   description: "Dashboard settings section",
// };

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
        <RoutingButton
          varient="solid"
          path="/dashboard/analytics"
          className="rounded-md"
        >
          Go to analytices
        </RoutingButton>
      </div>
    </div>
  );
}
