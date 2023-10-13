// import React from "react"

// contoh component pada react, menggunakan erow function 
// nama sebuat component harus menggunakan huruf kapital di awal (paskal case)
// contoh : component Button 
// untuk parameter menggunakan props: untuk bisa memberikan sesuai dengan kebutuhan properti dari app. 

// const Button = (props) => {
//   // untuk membuat default dari sebuah props bisa menggunakan konsep distractering
//   const {children='...', variant='bg-black'} = props;
//   return (
//     /* fungsikan props, memasukkan className kedalam {} dan menggunakan backtik,dan untuk memanipulasi 
//       menggunakan variable ${props.variant} dan untuk memasukkan variable kedalam sebuah string */
//     <button className={`h-10 px-6 font-semibold rounded-md ${variant} hover:bg-slate-500 text-white`} type="submit">
//           {/* props.text untuk memamnggil parameter */}
//           {/* {props.text} */}
//           {children}
//         </button>
//   );
// };

// function App() {

//   return (
//     <div className="flex justify-center bg-blue-500 min-h-screen items-center">
//       <div className="flex gap-x-3 ">
//         {/* memberikan properti untuk mengirimkan ke component */}
//       {/* <Button variant="bg-red-600" text="Login"></Button> */}
//       <Button variant="bg-red-600">Login</Button>
//       <Button variant="bg-blue-900">Logout</Button>
//       {/* memberikan warna default untuk button 3 */}
//       <Button></Button>
//       </div>
//     </div>
    
//   );

// }

// export default App;