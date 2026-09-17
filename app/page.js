import Contact from "@/components/Contact";
import Entities from "@/components/Entities";
import Image from "next/image";

export default function Home() {
  return (

      <div className='my-16 px-16'>
          <div className='text-4xl font-medium'>
              Welcome to LehBod, Inc.
          </div>

          <div className="pt-4 text-md mb-16">
            Our companies provide varied and valuable services to the entertainment industry, for Los Angeles & beyond.
          </div>
          
          <Entities />

          <Contact />

      </div>

  );
}
