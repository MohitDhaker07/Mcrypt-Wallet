import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          How to send me
        </h1>
        <b className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          1. Create a Metamask account <br />
          2. Connect your metamask wallet <br />
          3. Copy and paste public key and then type amount, keyowrd and message you want to transfer <br />
          4. Hit Send Now <br />
          5. Approve the Transaction

        </b>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        {/* <ServiceCard
          color="bg-[#2952E3]"
          title="Secured"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="The netowrk is secure"
        /> */}

        <ServiceCard
          color="bg-[#F84550]"
          title="Fast transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Transactions are secrued and fast through the network"
        />
      </div>
    </div>
  </div>
);

export default Services;
