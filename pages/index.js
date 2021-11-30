import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [CookiesInformation,CookiesInformationHandler] =useState({})

  return (
    <div className="bg-green-50">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex bg-green-500 justify-between p-4 ">
        <h1 className="text-4xl text-black font-bold" > Cookie Stand Admin</h1>
      </header>

      <main className=" m-10 flex bg-green-100 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <form className="p-6" onSubmit={(e)=>CookiesInformationHandler(CookiesInformation={"location":e.target.value.location,"minCustomer":e.target.value.minimum,"maxCustomers":e.target.value.maximum,"avgCookies":e.target.value.average})}>
          <legend className="text-2xl text-center pl-3">Create Cookie Stand</legend>
          <br/>
          <label>location</label>
          <input type="text" id="lname" name="location" />
          <br/>
          <label >Minimum Customer per Hour</label>
          <input type="text" id="lname" name="minimum" />
          <label>Maximum Customer per Hour</label>
          <input type="text" id="lname" name="maximum" />
          <label>Average Cookies Per sale</label>
          <input type="text" id="lname" name="average" />
          <br/>
          <button className="p-4 bg-green-500" type="submit">Submit</button>
        </form>
        hdhhdhdh

      </main>
      <br/>
        <p className="text-center">Report Table Coming Soon..</p>
        <br/>
        {/* <p className="text-center">{(CookiesInformation)}</p> */}

      <footer className="flex bg-green-500 justify-between p-4 font-bold">
        <p>&copy;2021</p>
      </footer>
    </div>
  )
}
