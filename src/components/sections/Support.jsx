const Support = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between md:py-10 md:px-32 py-12">
      <div className="flex justify-between items-center flex-col gap-3.5 p-8">
        <img className="" src="icons/delivery.png" alt="delivery" />
        <h2 className="text-xl font-semibold">Free Shipping</h2>
        <p className="text-[#555555] font-normal text-sm leading-relaxed">
          For invoices <br />
          over $1.500{" "}
        </p>
      </div>
      <div className="flex justify-between items-center flex-col gap-3.5 p-8">
        <img className="" src="icons/money-back.png" alt="money" />
        <h2 className="text-xl font-semibold">Cash Back</h2>
        <p className="text-[#555555] text-center font-normal text-sm leading-relaxed">
          When paying for products <br />
          via Dasun Wallet{" "}
        </p>
      </div>
      <div className="flex justify-between items-center flex-col gap-3.5 p-8">
        <img className="" src="icons/support.png" alt="support" />
        <h2 className="text-xl font-semibold">24/7 Support</h2>
        <p className="text-[#555555] text-center font-normal text-sm leading-relaxed">
          When something goes <br /> wrong
        </p>
      </div>
    </div>
  );
};

export default Support;