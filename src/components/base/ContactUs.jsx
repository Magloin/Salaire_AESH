import Card from "./Card";

function ContactUs () {
return (<div className="">
  <Card>
    <h2 className="text-lg text-left pl-1.5 font-extrabold max-sm:text-xs md:text-sm lg:text-lg xl:text-2xl xl:pl-3 ">Une question ?</h2>
    <div className="flex justify-center">
      <button type="button" className=" transition duration-500 ease-in-out bg-purple-700 hover:bg-red-600 transform hover:-translate-y-0.5 hover:scale-105 focus:outline-none  focus:ring-4 focus:ring-purple-300 font-medium rounded-lg  max-sm:px-2 max-sm:py-1 px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 flex justify-center"><a href="mailto:help.simulateur.aesh@gmail.com" className="text-white max-sm:text-xs max-sm:font-normal md:text-sm lg:text-sm xl:text-xl font-bold" >Contactez-moi !</a></button>
    </div>
  </Card>
</div>)
}

export default  ContactUs