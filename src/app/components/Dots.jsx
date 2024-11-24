// "use client";
// import anime from "animejs";
// import { useEffect } from "react";
// export function Dots() {
//   useEffect(() => {
//     anime({
//       targets: ".dot",
//       translateY: [-40, 40],
//       easing: "easeInOutSine",
//       duration: 1000,
//       direction: "alternate",
//       loop: true,
//       delay: anime.stagger(100), // Add delay between each dot
//     });
//   }, []);
//   return (
//     <>
//       <div className="dots-container inset-0">
//         {[...Array(20)].map((_, i) => (
//           <div key={i} className="dot"></div>
//         ))}
//       </div>
//     </>
//   );
// }
