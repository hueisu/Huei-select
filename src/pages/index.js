import { Inter } from "next/font/google";
import Base from "../layout/base";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Base>
      <div className="test-container">
        <div className="test-font">Testing</div>
      </div>
    </Base>
  );
}
