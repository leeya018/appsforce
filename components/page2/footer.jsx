const icon =
  "https://img.freepik.com/free-psd/logo-mockup-grey-wall_35913-2122.jpg?w=2000";
const linkdin = "https://cdn-icons-png.flaticon.com/512/174/174857.png";
export default function Footer({}) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-around px-16">
        {/* 1 */}
        <div className="w-20 h-20 ">
          <img src={icon} alt="icon" />
        </div>
        {/* 2 */}
        <div className="flex justify-between">
          <div>
            <ul>
              <li>Home</li>
              <li>Careers</li>
              <li>Contact us</li>
              <li>About us</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Home</li>
              <li>Careers</li>
              <li>Contact us</li>
              <li>About us</li>
            </ul>
          </div>
        </div>
        {/* 3 */}
        <div className="flex flex-col">
          <div>
            <select name="language" id=""></select>
          </div>
          <div className="flex">
            <img src={linkdin} alt="linkdin" className="w-20 h-20" />
            <img src={linkdin} alt="linkdin" className="w-20 h-20" />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        All rights reserved to Appsforce Ltd 2022 ©
      </div>
    </div>
  );
}
