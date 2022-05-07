import React from "react";
import { CheckIcon } from "@heroicons/react/solid";

function Pricing() {
  return (
    <div name='pricing' className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>
      <div className="max-w-[1240px] mx-auto py-12">

        <div className="text-center py-8 text-slate-300">
          <h2 className="uppercase text-3xl">pricing</h2>
          <h3 className="capitalize text-5xl font-bold text-white py-8">the right price for your research.</h3>
          <p className="text-3xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
            magnam distinctio numquam. Voluptatibus, atque. Molestias similique
            id officia dolores maiores.
          </p>
        </div>

        <div className="grid md:grid-cols-2">
        <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl ">
          <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl">standard</span>
          <div className="pt-4 pb-8">
            <p className="font-bold text-5xl">
              $49<span className="text-xl text-slate-500">/mo</span>
            </p>
          </div>
          <p className="text-xl text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className=" py-8 text-xl ">
              <p className="flex  py-2"><CheckIcon className="w-8 mr-5 text-green-600"/>Lorem, ipsum dolor.</p>
              <p className="flex  py-2"><CheckIcon className="w-8 mr-5 text-green-600"/>Lorem, ipsum dolor.</p>
              <p className="flex  py-2"><CheckIcon className="w-8 mr-5 text-green-600"/>Lorem, ipsum dolor.</p>
              <p className="flex  py-2"><CheckIcon className="w-8 mr-5 text-green-600"/>Lorem, ipsum dolor.</p>
          </div>
          
          <button className="w-full  p-4  capitalize text-lg ">get started</button>
          </div>

        <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl ">
          <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl">premium</span>
          <div className="pt-4 pb-8">
            <p className="font-bold text-5xl">
              $99<span className="text-xl text-slate-500">/mo</span>
            </p>
          </div>
          <p className="text-xl text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className=" py-8 text-xl ">
              <p className="flex  py-2"><CheckIcon className="w-8 mr-5 text-green-600"/>Lorem, ipsum dolor.</p>
              <p className="flex  py-2"><CheckIcon className="w-8 mr-5 text-green-600"/>Lorem, ipsum dolor.</p>
              <p className="flex  py-2"><CheckIcon className="w-8 mr-5 text-green-600"/>Lorem, ipsum dolor.</p>
              <p className="flex  py-2"><CheckIcon className="w-8 mr-5 text-green-600"/>Lorem, ipsum dolor.</p>
          </div>
          
          <button className="w-full  p-4  capitalize text-lg ">get started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
