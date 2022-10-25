const phone =
  "https://i.pinimg.com/736x/69/ba/33/69ba33768b51f18ec62d21ebf48e8667.jpg";
const envelope =
  "https://media.istockphoto.com/vectors/illustration-of-an-email-vector-id1140103155?k=20&m=1140103155&s=612x612&w=0&h=UHklqzVysW36LLOFF6rUHhvEGyjI3yHoncUekp_wgyA=";

const location =
  "https://png.pngitem.com/pimgs/s/9-97611_transparent-location-icon-png-location-icon-png-white.png";

const man =
  "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
export default function LetsTalk({}) {
  return (
    <div className="bg-gray-300 flex justify-center h-[50vh] pt-10">
      <div className="w-[80%] flex justify-between overflow-hidden">
        <Letf />
        <Right />
      </div>
    </div>
  );
}

const Right = () => {
  return (
    // how to fix so they can be stretched
    <div className="h-[100%]">
      <div className="grid grid-cols-2 gap-2 w-full">
        <input
          type="text"
          placeholder="name"
          className="rounded-xl flex justify-center items-center"
        />
        <input
          type="text"
          placeholder="name"
          className="rounded-xl flex justify-center items-center"
        />
        <input
          type="text"
          placeholder="name"
          className="rounded-xl flex justify-center items-center col-span-2"
        />
        <input
          type="text"
          placeholder="name"
          className="rounded-xl flex justify-center items-center col-span-2"
        />
      </div>
      <div>
        <button className="bg-blue-700 rounded-full text-white font-bold text-lg w-[40%] ml-3 h-12 p-2 flex justify-center items-center">
          SEND
        </button>
      </div>
    </div>
  );
};
const Letf = ({}) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center font-bold text-5xl mb-9 text-blue-700">
        Let's Talk|
      </div>

      <div className="flex flex-col font-medium text-lg">
        <div className="mt-4">
          Give us a call or email, we’ll be glad to hear your thoughts and
          dreams.|
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <Item text={"052-3954991"} image={phone} />
            <Item text={"dev@appsforce.io"} image={envelope} />
            <Item text={"Sderot Giborei Israel"} image={location} />
          </div>
          <div className="w-56 h-80 overflow-hidden">
            <img src={man} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
const Item = ({ image, text }) => {
  return (
    <div className="mt-2 flex">
      <div className="w-10 h-10">
        <img src={image} alt="phone" />
      </div>
      <div>{text}</div>
    </div>
  );
};
