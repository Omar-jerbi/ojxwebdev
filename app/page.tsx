import Link from "next/link";
import './globals.css'
import './Landing.scss'

export default function () {
  return (
    <div className="landing">
      <div className="left">
        <div className="l">
          <Link href={'/WebDev'}>OJX-Webdev</Link>
          <hr />
        </div>
        <div className="bg"></div>
      </div>
      <div className="right">
        <div className="l">
          {/* ext */}
          <Link href={'/'}>OJX-Academy</Link>
          <hr />
        </div>
        <div className="bg"></div>
      </div>
    </div>
  );
}