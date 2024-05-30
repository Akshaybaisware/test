// import { check } from "../assets";
// import { pricing } from "../constants";
// import Button from "./Button";

// const PricingList = () => {
//   return (
//     <div className="flex gap-[1rem] max-lg:flex-wrap">
//       {pricing.map((item) => (
//         <div
//           key={item.id}
//           className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
//         >
//           <h4 className="h4 mb-4">{item.title}</h4>

//           <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
//             {item.description}
//           </p>

//           <div className="flex items-center h-[5.5rem] mb-6">
//             {item.price && (
//               <>
//                 <div className="h3">$</div>
//                 <div className="text-[5.5rem] leading-none font-bold">
//                   {item.price}
//                 </div>
//               </>
//             )}
//           </div>

//           <Button
//             className="w-full mb-6"
//             href={item.price ? "/pricing" : "mailto:contact@jsmastery.pro"}
//             white={!!item.price}
//           >
//             {item.price ? "Get started" : "Contact us"}
//           </Button>

//           <ul>
//             {item.features.map((feature, index) => (
//               <li
//                 key={index}
//                 className="flex items-start py-5 border-t border-n-6"
//               >
//                 <img src={check} width={24} height={24} alt="Check" />
//                 <p className="body-2 ml-4">{feature}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PricingList;

import { cases } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { background } from "../assets";
import { Link, useNavigate, } from "react-router-dom";

const PricingList = () => {

  const navigate = useNavigate();

    const handleClick = () => {
      console.log("click" , handleClick)
        navigate("/smartcity");
    };
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          // title="Custom IT Solutions for Your  Successful Business"
        />

        <div className="flex flex-wrap gap-1 mb-10">
          {cases.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat md:max-w-[24rem]"
              // style={{
              //     zIndex: 2, // Ensure the z-index is correct in your layout
              //     backgroundImage: `url(${item.backgroundUrl})`, // Make sure the URL is valid and accessible
              // }}
              key={item.id} // Ensure the key is unique and consistent
            >
              <div
                style={{
                  zIndex: 2, // Ensure the z-index is correct in your layout
                  backgroundImage: `url(${item.backgroundUrl})`,
                  backgroundSize: "cover", // Adjusts the image to cover the entire div
                  backgroundPosition: "center", // Centers the image within the div
                  //backgroundRepeat: 'no-repeat', // Ensures the image does not repeat
                  // width: `${item.width}px`, // Sets the width of the element using the width property from the item object
                  // height: `${item.height}px`, // Sets the height of the element using the height property from the item object // Make sure the URL is valid and accessible
                }}
                className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none"
              >
                {/* <button className="h8 mb-5 bg-white p-3  font-bold text-black">{item.title}</button> */}
                <button
                  className="mb-5 h8 p-3 font-bold"
                  style={{
                    background: "linear-gradient(90deg, #f3a683, #ee5a24)", // Gradient background
                    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)", // Shadow effect
                    color: "#03030c", // Text color
                    borderRadius: "8px", // Border radius for rounded corners
                  }}
                >
                  {item.title}
                </button>
                <p
                  style={{ visibility: "hidden" }}
                  className="body-2 mb-6 text-n-3"
                >
                  {item.text}
                </p>
              
                <div className="flex items-center mt-auto">
                  {/* <button className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider bg-red">
                    Explore more
                  </button> */}
                  {/* <button  className="ml-auto font-code text-xs font-bold text-black uppercase tracking-wider bg-white p-3">
                    Explore more
                  </button> */}
                   <Link to="/smartcity">
                  <button
                  
                    className="ml-auto font-code text-xs font-bold uppercase tracking-wider p-3"
                    style={{
                      background: "linear-gradient(to right, #6a11cb, #2575fc)", // Purple gradient background
                      color: "#ffffff", // Text color: white
                      borderRadius: "8px", // Optional: rounded corners
                    }}
                    onClick={handleClick}
                  >
                    Explore more
                  </button>
                </Link>
                 
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default PricingList;
