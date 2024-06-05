"use client";

import { useSearchParams } from "next/navigation";
import { useRef } from "react";

const RsvpForm = () => {
  const searchParams = useSearchParams();
  const guest = searchParams.get("kpd");

  const nama = useRef(null);
  const pesanSingkat = useRef(null);

  return (
    <section className="w-72 py-10">
      <h1 className="text-center font-bold text-2xl text-accent">RSVP</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="nama" className="block text-base font-medium leading-6 text-accent">
            Nama
          </label>
          <div className="mt-2">
            <input
              id="nama"
              name="nama"
              type="nama"
              ref={nama}
              defaultValue={guest ? guest.charAt(0).toUpperCase() + guest.slice(1) : "Guest"}
              autoComplete="nama"
              className="block w-full rounded-md border-0 p-2 text-accent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="pesanSingkat" className="block text-base font-medium leading-6 text-accent">
            Pesan Singkat
          </label>
          <div className="mt-2">
            <textarea
              id="pesanSingkat"
              name="pesanSingkat"
              rows={3}
              ref={pesanSingkat}
              className="block w-full rounded-md border-0 p-2 text-accent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={""}
            />
          </div>
        </div>
        <div>
          <span className="block text-base font-medium leading-6 text-accent">Kehadiran</span>
          <div className="flex items-center gap-x-6 mt-2">
            <div className="flex items-center gap-x-1">
              <input id="push-everything" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" defaultChecked />
              <label htmlFor="push-everything" className="block text-s font-medium leading-6 text-accent">
                Hadir
              </label>
            </div>
            <div className="flex items-center gap-x-1">
              <input id="push-email" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
              <label htmlFor="push-email" className="block text-s font-medium leading-6 text-accent">
                Tidak Hadir
              </label>
            </div>
          </div>
        </div>
        <button className="bg-accent rounded-lg text-primary px-4 py-2">Kirim</button>
      </form>
    </section>
  );
};

export default RsvpForm;
