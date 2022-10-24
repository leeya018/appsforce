export default function FooterPurple({}) {
  return (
    // how do I make the transition on the plan while mooving
    //  in then end of gage, how do I mae the curve
    // this is need to takle all the ramin spance
    <div className="flex justify-center bg-purple-600 h-[50vh] ">
      <div className="absolute bottom-0 left-0">
        <img
          className="w-5 h-5"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/MUTCD_D9-6.svg/640px-MUTCD_D9-6.svg.png"
          alt=""
        />
      </div>
      <div className="absolute bottom-28 right-10">
        {" "}
        <img
          className="w-14 h-14"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/MUTCD_D9-6.svg/640px-MUTCD_D9-6.svg.png"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center text-white">
        <div className="w-20">[Arrrow]</div>
        <div className="w-60 h-30">
          <img
            src="https://www.clipartmax.com/png/middle/365-3656282_plane-takeoff-icon-airplane-icon-transparent-background.png"
            alt="plan"
          />
        </div>
        <div className="flex justify-center font-bold text-5xl mb-9">
          We do it like a A-Unit
        </div>
        <div className="flex flex-col font-medium text-lg">
          <div className="flex justify-center">
            In Appsforce we are dedicated, committed and laser focused on the
            target, just like a special forces unit.
          </div>
          <div className="flex justify-center">
            We will take your dream and vision into a complete product and will
            always have your back.
          </div>
        </div>
      </div>
    </div>
  );
}
