import Button from "@/components/common/Button";
import data from "@/constants/data.json";
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-5 text-white lg:text-primary-500">
      {data.map((item, index) => (
        <React.Fragment key={index}>
          {item.subItems ? (
            <div key={index} className="relative group/catagory">
              <Link
                className="font-semibold gap-1 flex items-center"
                to={item.slug}
              >
                {item.title}

                <i className="fi fi-sr-angle-small-down flex rotate-180 group-hover/catagory:rotate-0 transition-all"></i>
              </Link>

              <div className="hidden mt-4 lg:mt-0 group-hover/catagory:block lg:absolute lg:w-[18rem] lg:left-1/2 lg:-translate-x-1/2 top-full max-h-[16rem] overflow-y-scroll lg:overflow-y-auto text-primary-500">
                <div className="hidden lg:block lg:my-4"></div>

                <div className="flex flex-col py-2 shadow-xl bg-neutral-100">
                  {item.subItems.map((subItem) => (
                    <Link
                      to={`/${item.slug}/${subItem.slug}`}
                      key={subItem.slug}
                      className="block py-[8px] px-3 font-semibold hover:bg-neutral-200 border-t border-t-black/25 first:border-t-transparent"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : item.isBtn ? (
            <Link to={item.slug}>
              <Button
                type="secondary"
                styles={"w-fit text-white px-5 py-3 lg:text-primary-500"}
              >
                Contact Us
              </Button>
            </Link>
          ) : (
            <Link to={item.slug} key={index} className="font-semibold ">
              {item.title}
            </Link>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Navigation;
