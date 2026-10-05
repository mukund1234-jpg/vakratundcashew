// // Illustrative placeholder art (not a stock photo) — swap the wrapping
// // element for a real <img src="..." /> of product photography when
// // available. Kept as SVG so the site works before photos are supplied.

// export default function CashewIllustration({ className = '' }) {
//   return (
//     <svg
//       viewBox="0 0 400 400"
//       className={className}
//       xmlns="http://www.w3.org/2000/svg"
//       role="img"
//       aria-label="Illustration of whole cashew kernels"
//     >
//       <rect width="400" height="400" fill="#EFDCC0" />
//       <g opacity="0.5">
//         {Array.from({ length: 6 }).map((_, i) => (
//           <line
//             key={i}
//             x1="0"
//             y1={40 + i * 60}
//             x2="400"
//             y2={40 + i * 60 + 8}
//             stroke="#D9BE96"
//             strokeWidth="2"
//           />
//         ))}
//       </g>
//       {[
//         [110, 150, 0],
//         [230, 130, 25],
//         [170, 230, -15],
//         [270, 240, 10],
//         [90, 260, -30],
//       ].map(([cx, cy, rot], i) => (
//         <g key={i} transform={`translate(${cx} ${cy}) rotate(${rot})`}>
//           <path
//             d="M0 -40 C22 -40 34 -20 30 0 C27 16 14 22 8 34 C4 42 -6 42 -10 32 C-16 18 -30 12 -32 -6 C-34 -26 -18 -40 0 -40 Z"
//             fill="#C98A3D"
//             stroke="#9C6B35"
//             strokeWidth="2"
//           />
//           <path
//             d="M-6 -30 C4 -32 14 -24 12 -10"
//             stroke="#E3A34E"
//             strokeWidth="3"
//             fill="none"
//             strokeLinecap="round"
//             opacity="0.7"
//           />
//         </g>
//       ))}
//     </svg>
//   )
// }

export default function CashewIllustration({ className = '', alt = 'W180 Whole Cashew Kernels' }) {
  const imageUrl = "https://res.cloudinary.com/dnuhhor4p/image/upload/v1790489904/w180_eta5zx.png"

  return (
    <div className={`overflow-hidden rounded-2xl bg-cream-100 ${className}`}>
      <img
        src={imageUrl}
        alt={alt}
        className="h-58 w-full object-cover transition-transform duration-300 hover:scale-105"
        loading="lazy"
      />
    </div>
  )
}