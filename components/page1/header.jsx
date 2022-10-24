export default function Header({}) {
  return (
    <div className="flex justify-between mx-2">
      <div>
        <img
          src="https://img.freepik.com/free-psd/logo-mockup-grey-wall_35913-2122.jpg?w=2000"
          alt=""
          className="w-10 h-10"
        />
      </div>
      <div className="flex w-[50vw] items-center justify-around">
        <div className="font-bold text-xl">Home</div>
        <div className="font-bold text-xl">Service</div>
        <div className="font-bold text-xl">Careers</div>
        <div className="font-bold text-xl">About us</div>
        <div className="font-bold text-xl">Contact</div>
      </div>
      <div>
        <img
          src="https://img.freepik.com/free-psd/logo-mockup-grey-wall_35913-2122.jpg?w=2000"
          alt=""
          className="w-10 h-10"
        />
      </div>
    </div>
  );
}
