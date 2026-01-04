import Navbar from "../../components/Navbar/src/Navbar";
export default function Home() {
  return (
  
  <>
  <div className="w-screen h-screen bg-gray-100 dark:gray-800 text-gray-900 dark:text-gray-100">
    <nav>
      <Navbar />
    </nav>
        <div className="flex justify-center text-3xl sm:text-xl p-5 md:p-3">
          <h1 className="text-gray-700">Welcome</h1>
      </div>
  </div> 
  </>
  );
}
