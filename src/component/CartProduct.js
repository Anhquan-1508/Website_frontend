import React from "react";
import { TbPlus, TbMinus } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  decreaseQty,
  deleteCartItem,
  increaseQty,
} from "../redux/productSlide";

const CartProduct = ({
  id,
  name,
  image,
  category,
  qty,
  total,
  price,
  discountValue,
}) => {
  const dispatch = useDispatch();

  // Tính giá trị sau khi áp dụng giảm giá
  const discountedTotal = total - discountValue;

  return (
    <div className="bg-slate-200 p-2 flex gap-4 rounded border border-slate-300">
      <div className="p-3 bg-white rounded overflow-hidden">
        <img src={image} className="h-28 w-40 object-cover" alt={name} />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex justify-between">
          <h3 className="font-semibold text-slate-600 capitalize text-lg md:text-xl">
            {name}
          </h3>
          <div
            className="cursor-pointer text-slate-700 hover:text-red-500"
            onClick={() => dispatch(deleteCartItem(id))}
          >
            <AiFillDelete />
          </div>
        </div>
        <p className="text-slate-500 font-medium">{category}</p>
        <p className="font-bold text-base">
        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}
        </p>
        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <button
              onClick={() => dispatch(increaseQty(id))}
              className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-1 "
            >
              <TbPlus />
            </button>
            <p className="font-semibold p-1">{qty}</p>
            <button
              onClick={() => dispatch(decreaseQty(id))}
              className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-1 "
            >
              <TbMinus />
            </button>
          </div>
          <div className="flex flex-col items-end font-bold text-slate-700">
            <p className="flex gap-2 items-center">
              Total:
              <span className="text-red-500">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total)}</span>
            </p>
            {discountValue > 0 && (
              <p className="flex gap-2 items-center text-green-500 text-sm">
                Discounted Total:
                <span className="text-red-500">
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(discountedTotal)}
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
