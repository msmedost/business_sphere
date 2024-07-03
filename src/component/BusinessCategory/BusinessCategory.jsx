import categories from "./catagories";

function BusinessCategory() {
  return (
    <div className=" min-h-[70vh] flex">
      {categories.map((item, index) => {
        return (
          <div key={index}>
            <div className=" border-8 border-black w-fit flex">
              <img className=" w-40" src={item.logo} alt="" />
              <div>{item.serviceName}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default BusinessCategory;
