import Card from "./Card";

function ContactUs () {
return (<div className="hidden">
  <Card>
    <h2 className="text-lg text-left pl-1.5 font-extrabold max-sm:text-xs md:text-sm lg:text-xl xl:text-2xl xl:pl-3 ">Un soucis ? une question ?</h2>
    <div className=" flex flex-col justify-around items-center pb-2">
        <button class="inline-block px-7 py-1.5 overflow-hidden text-xs font-semibold transition-transform rounded-full group text text-green-700/70 bg-gray-400/30 hover:bg-gray-500/70 hover:text-white">
          <span before="Ecrivez Nous" class="relative py-1.5 transition-transform inline-block before:content-[attr(before)] before:py-2 before:absolute before:top-full group-hover:-translate-y-full"><img class="h-10 w-20 object-contain ..." src="../Pictures/email.png" /></span>
        </button>
      </div> 
    </Card>
</div>)
}

export default  ContactUs