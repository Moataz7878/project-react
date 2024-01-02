import { Link } from "react-router-dom";
import style from './style.module.css'
export default function Navber(){



    return<>
<div className={style.Navber}>
  <div className="container">
    <div className="row text-white p-3">
      <div className="col-md-3 text-center ">
        <h2 className="fw-bold">Start React</h2>
      </div>
      <div className="offset-2 col-md-6 ">
        <ul className="pt-2">
          <li><Link to='Home'>Home</Link></li>
          <li><Link to='Portfolio'>Portfolio</Link></li>
          <li><Link to='About'>About</Link></li>
          <li><Link to='Contact'>Contact</Link></li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </>
}