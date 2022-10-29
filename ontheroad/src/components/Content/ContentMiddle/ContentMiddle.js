// import React, { useEffect, useState } from "react";
// import '../ContentMiddle/ContentMiddle.css';

// function ContentMiddle() {

//     const [product, setProduct] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:3001/api/products/list')
//             .then(res => res.json())
//             .then(data => console.log(data.data.product))
//             .catch(e => console.log(e))
//     }, [])

//     return (
//         <div className="contentMiddle">
//             <div className="card">
//                 <h1 className="last">Último producto en la Base de Datos</h1>
//                 <div className="productcard">
//                     <img className="lastimg"></img>
//                     <div className="cardtext">
//                         <h4 className="producttitle"></h4>
//                         <span className="productdesc"></span>
//                         <span className="productprice"></span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ContentMiddle;