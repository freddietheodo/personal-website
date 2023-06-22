export default function Home() {
  return (
    <>
      <main>
        <div className="min-h-screen bg-grey">
          <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-70%]">
            <div className="flex-col items-center justify-center">
              <div className="flex w-[300px] h-[300px] bg-white rounded-full shadow-white shadow-2xl py-9" />
              <div>
                <h1 className="flex text-center text-3xl text-white py-5">
                  👋 Freddie Woods
                </h1>
                <h2 className="flex text-center w-[600px] text-5xl text-white py-5">
                  Building Creative Websites and Apps
                </h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
