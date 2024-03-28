export default function RootTemplate({ children }) {
  console.log("RootTemplate ");
  return (
    <div className="border-2 border-yellow-500 p-4 m-4">
      Template
      <div>{children}</div>
    </div>
  );
}
