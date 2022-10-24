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

export default function Items({}) {
  // how to make that just the title that in the middle will be purple
  // how to maket hat the image will center and move until we are getting to the next title
  return (
    <div className="flex justify-center">
      <div className="w-[70vw] flex flex-col">
        {/* item */}
        <Item link={react} />
        <Item link={angular} />
        <Item link={vue} />
        <Item link={bootstrap} />
        <Item link={tailwindcss} />
      </div>
    </div>
  );
}

const Item = ({ link }) => {
  return (
    <div className="flex justify-between">
      <div className="w-[50%] flex flex-col">
        <div className="font-bold text-purple-500 text-5xl mb-4">
          Front End Development
        </div>
        <div className="font-medium text-lg">
          Our most outstanding expertise, Whether it’s developing from scratch
          or redesign your product, we uses the most cutting edge and flexible
          frameworks to ensure you will have the best of best.
        </div>
      </div>
      <div className="w-[50%] ">
        <img src={link} alt="connect img" />
      </div>
    </div>
  );
};
