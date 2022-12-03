import React from 'react'
import PP from "../pp.jpg"

function Cv() {
  return (
    <div>
   <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
  <div className="flex items-center">
    <img
      alt="Developer"
      src={PP}
      className="h-16 w-16 rounded-full object-cover"
    />

    <div className="ml-3">
      <h3 className="text-lg font-medium text-white">Ridho</h3>

      <div className="flow-root">
        <ul className="-m-1 flex flex-wrap">
          <li className="p-1 leading-none">
            <a href="#" className="text-xs font-medium text-gray-300"> Twitter </a>
          </li>

          <li className="p-1 leading-none">
            <a href="#" className="text-xs font-medium text-gray-300"> GitHub </a>
          </li>

          <li className="p-1 leading-none">
            <a href="#" className="text-xs font-medium text-gray-300">Website</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <ul className="mt-4 space-y-2">
    <li>
      <div
        
        className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
      >
        <strong className="font-medium text-white">Data Diri</strong>

        <p className="mt-1 text-xs font-medium text-gray-300">
         name:Resyhan Ridho Salasa</p>
        <p className="mt-1 text-xs font-medium text-gray-300">
         Umur:15</p>
        <p className="mt-1 text-xs font-medium text-gray-300">
        Tempat Lahir:Semarang</p>
        <p className="mt-1 text-xs font-medium text-gray-300">
        kelurahan:Bringin</p>
        
      </div>
    </li>

    <li>
      <div
        className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
      >
        <strong className="font-medium text-white">Lainya</strong>

        <p className="mt-1 text-xs font-medium text-gray-300">
          Hoby:gaming
        </p>
        <p className="mt-1 text-xs font-medium text-gray-300">
          status:jomblo
        </p>
        <p className="mt-1 text-xs font-medium text-gray-300">
          Gender:laki-laki
        </p>
      </div>
    </li>
  </ul>
</article>

  </div>
  )
}

export default Cv