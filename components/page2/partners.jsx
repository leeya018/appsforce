const react =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png";
const angular =
  "https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg";
const vue =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png";
const bootstrap =
  "https://raw.githubusercontent.com/themedotid/bootstrap-icon/HEAD/docs/bootstrap-icon-css.png";
const tailwindcss =
  "https://www.drupal.org/files/project-images/screenshot_361.png";

export default function Partners({}) {
  return (
    <div className="flex flex-col h-[70vh] text-white bg-purple-500">
      <div className="flex justify-center font-bold text-5xl mb-9">
        Our Partners To Success
      </div>

      <div className="flex justify-center font-medium text-lg">
        We keep our customers at the core of our business, their success is our
        success.
      </div>
      <div className="flex justify-center">
        <div className=" grid grid-cols-5 gap-5 mt-8">
          {/* item */}
          <Item link={react} />
          <Item link={angular} />
          <Item link={vue} />
          <Item link={bootstrap} />
          <Item link={tailwindcss} />
          <Item link={react} />
          <Item link={angular} />
          <Item link={vue} />
          <Item link={bootstrap} />
          <Item link={tailwindcss} />
        </div>
      </div>
    </div>
  );
}
const Item = ({ link }) => {
  return (
    <div className="flex justify-center items-center bg-white w-44 h-44 rounded-3xl">
      <div className="w-[80%] h-[80%]">
        <img src={link} alt="item img" />
      </div>
    </div>
  );
};
