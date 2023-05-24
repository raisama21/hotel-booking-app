export default function TopNaivgationBar() {
  return (
    <nav className="ml-80">
      <div className="flex items-center shadow-lg py-2 px-4 rounded-lg">
        <div>
          <h2 className="inline-flex items-center h-12 px-4.5 text-xl font-semibold rounded-lg transition-colors duration-250 ease-in-out hover:bg-gray-400/60 hover:cursor-pointer">
            Dashboard
          </h2>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <div className="h-12">
            <input
              type="text"
              placeholder="Search here"
              className="input-style"
            />
          </div>

          <div>
            <div className="w-10 hover:ring-2 hover:ring-black hover:rounded-full hover:cursor-pointer transition-all ease-in-out duration-250">
              <img src="/avatar.jpg" className="rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
