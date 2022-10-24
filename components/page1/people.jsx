const address =
  "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
export default function People({}) {
  return (
    <div className="flex justify-between mt-28 gap-3">
      <div>
        <img src={address} alt="" />
      </div>
      <div>
        <img src={address} alt="" />
      </div>
      <div>
        <img src={address} alt="" />
      </div>
      <div>
        <img src={address} alt="" />
      </div>
      <div>
        <img src={address} alt="" />
      </div>
    </div>
  );
}
