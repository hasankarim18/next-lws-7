import Button from "./components/Button";

export const metadata = {
  title: "Home",
  description: "This is home page",
};

export default function Home() {
  return (
    <main className="">
      <h1 className="text-3xl"> Home page</h1>

      <br />
      <Button path="/dashboard" varient="solid" className="m-4">
        Dashboard by useRouter
      </Button>

      <div className="mt-10">
        This is the home page content Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Beatae ducimus nemo incidunt maiores dignissimos
        deserunt, blanditiis totam delectus numquam ab quasi. Debitis veritatis
        in illum doloremque earum consequatur necessitatibus ullam?
      </div>
    </main>
  );
}
