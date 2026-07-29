import FinanceSteps from './finance-steps';

const FinanceProcess = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 text-white xl:px-0 [@media(width=1280px)]:px-4">
      <div className="flex justify-center">
        <div className="px-4 xl:px-0">
          <h2 className="text-center text-[32px] font-bold lg:text-6xl">
            Metal Building <span className="text-accent leading-[1.2]">Financing Process</span>
          </h2>
          <div className="max-w-4xl py-4 text-center xl:py-6">
            <span className="text-sm leading-snug text-white lg:text-xl">
              Start your project journey effortlessly with our steel building financing, tailored to
              be simple and accomplished in just three seamless steps!
            </span>
          </div>
        </div>
      </div>
      <div className="pt-4 xl:pt-16">
        <FinanceSteps />
      </div>
    </div>
  );
};

export default FinanceProcess;
