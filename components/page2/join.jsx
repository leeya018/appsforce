export default function Join({}) {
  return (
    <div className="bg-gray-300 flex justify-center">
      <div className="w-[50%] flex ">
        <div className="flex flex-col">
          <div className="flex justify-center font-bold text-5xl mb-9 text-blue-700">
            Join the Appsforce|
          </div>

          <div className="flex flex-col font-medium text-lg">
            <div className="mt-4">
              We use cutting edge technologies and the best practices and tools
              in order to build the perfect product for our customers.
            </div>

            <div className="mt-2">
              So, if coding is your passion and your are talented programmer we
              are welcome you to join the web development spacial forces,
              Appsforce.
            </div>

            <div className="mt-2">Join us!</div>
            <div>
              <button className="bg-purple-500 rounded-full text-white font-bold text-lg w-[40%] ml-3 h-12 p-2 flex justify-center items-center">
                OUR OPEN POSITIONS
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            src={
              "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
