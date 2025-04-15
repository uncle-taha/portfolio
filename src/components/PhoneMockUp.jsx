function PhoneMockUp() {
  return (
    <>
      <div
        className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[550px] w-[290px]"
        style={{
          transform: "rotate(0deg)", // Rotating everything to the left
        }}
      >
        <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[530px] bg-white dark:bg-gray-800">
          <div
            className="transform"
            style={{
              transform: "rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
              marginTop: "-25px", // Adjust to make the image stick out
              marginBottom: "-35px", // Adjust to make the image stick out
            }}
          >
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
              className="dark:hidden w-[255px] h-[550px]  "
              alt="Light Mockup"
            />
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
              className="hidden dark:block w-[255px] h-[550px]"
              alt="Dark Mockup"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PhoneMockUp;
