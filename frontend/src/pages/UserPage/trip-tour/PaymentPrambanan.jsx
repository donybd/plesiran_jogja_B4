// import Footer from "../../../components/User/Footer";
// import Navbar from "../../../components/User/Navbar";
// import "../../../styles/detail-tour/detail-tour.css";
// import BookingForm from "./BookingForm";

// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// const DetailTourPrambanan = () => {
//   const { id } = useParams(); // Mengambil id dari URL params

//   const URL = import.meta.env.VITE_BE_API;
//   const [data, setData] = useState(null); // Untuk menyimpan data tour
//   const [loading, setLoading] = useState(true); // Untuk handle loading
//   const [error, setError] = useState(null); // Untuk handle error

//   // Mengambil data detail tour berdasarkan id
//   useEffect(() => {
//     async function fetchTourDetails() {
//       if (!id) {
//         setError("Tour ID tidak valid");
//         setLoading(false);
//         return;
//       }

//       try {
//         setLoading(true); // Menandakan sedang memuat data
//         const response = await fetch(`${URL}tour/details/${id}`);

//         // Jika respons tidak sukses
//         if (!response.ok) {
//           throw new Error("Gagal memuat data tour");
//         }

//         const result = await response.json();
//         setData(result.data); // Menyimpan data hasil fetch
//       } catch (error) {
//         console.error("Error fetching tour details:", error);
//         setError("Gagal mengambil data tour");
//       } finally {
//         setLoading(false); // Set loading false setelah proses selesai
//       }
//     }

//     fetchTourDetails(); // Memanggil fungsi untuk fetch data
//   }, [id]); // Hanya dipanggil ulang jika `id` berubah

//   // Jika ada error saat memuat data
//   if (error) {
//     return (
//       <>
//         <Navbar />
//         <div className="hero-det-tour">
//           <h1>{error}</h1>
//         </div>
//         <BookingForm />
//         <Footer />
//       </>
//     );
//   }

//   // Jika data sudah tersedia dan loading selesai
//   return loading ? (
//     <>
//       <Navbar />
//       <div className="hero-det-tour">
//         <h1>Loading...</h1>
//       </div>
//       <BookingForm />
//       <Footer />
//     </>
//   ) : (
//     data && (
//       <>
//         <Navbar />
//         <div className="hero-det-tour">
//           <h1>{data.tour_name}</h1>
//           <div className="hero-det-overlay"></div>
//         </div>

//         <section>
//           <div className="content">
//             <div className="txt-content justify-content-center">
//               <h2>History</h2>
//               <p>{data.history}</p>
//             </div>
//           </div>
//         </section>

//         <section>
//           <div className="des-tour">
//             <div className="txt-content">
//               <h2>Tour Description - 3 Days Package</h2>
//               <ul>
//                 <li>
//                   Day 1
//                   <ul>
//                     <li>{data.day1_description}</li>
//                   </ul>
//                 </li>
//                 <li>
//                   Day 2
//                   <ul>
//                     <li>{data.day2_description}</li>
//                   </ul>
//                 </li>
//                 <li>
//                   Day 3
//                   <ul>
//                     <li>{data.day3_description}</li>
//                   </ul>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         <section>
//           <div className="det-price">
//             <div className="txt-content">
//               <h2>Detailed Price</h2>
//               <p>Rp {data.detail_price}</p>
//             </div>
//           </div>
//         </section>

//         <section>
//           <div className="fees-included">
//             <div className="txt-content">
//               <h2>Fees Included</h2>
//               <ul>
//                 <li>Private Transport</li>
//                 <li>Entrance fees</li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         <BookingForm />
//         <Footer />
//       </>
//     )
//   );
// };

// export default DetailTourPrambanan;
