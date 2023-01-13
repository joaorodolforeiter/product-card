import turn360 from "./../assets/turn360.svg";
import close from "./../assets/close.svg";
import Button from "./Button";

import { useState } from "react";

export default function ProductCard({
  title,
  price,
  code,
  itemImg,
  itemImg360,
}) {
  const [is360, setIs360] = useState(false);

  return (
    <div
      className="max-lg:p-5 max-lg:max-w-[400px] lg:w-[875px] lg:h-[498px] lg:flex-row
                gap-3 flex flex-col items-center shadow-xl rounded-lg bg-[#D9CDF7]"
    >
      <div className=" lg:h-[253px] relative">
        <button
          className="h-8 w-8 flex justify-center items-center absolute top-0 right-0 sm:top-2 sm:right-12"
          onClick={() => {
            setIs360(!is360);
          }}
        >
          <img className="" src={is360 ? close : turn360} alt="" />
        </button>
        <img
          className="lg:w-[449px]"
          src={is360 ? itemImg360 : itemImg}
          alt=""
        />
      </div>
      <div className="flex flex-col max-lg:self-start">
        <div className="flex flex-col justify-between">
          <div className="font-['lato'] text-[10px] font-light text-[#271A45]">
            CÓDIGO: {code}
          </div>
          <div className="font-['Crimson_Pro'] text-[32px] text-[#271A45]">
            {title}
          </div>
          <div className="font-['lato'] text-[16px] text-[#271A45]">
            {price}
          </div>
        </div>
        <Button>ADICIONAR À CESTA</Button>
      </div>
    </div>
  );
}
