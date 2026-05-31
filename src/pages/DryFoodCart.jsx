function DryFoodCart({id,title,setare,option,img})
{
    return(
    
          <div className="w-40 h-70 bg-white rounded-xl">
            <figure>
               <img src={img} alt="" />
            </figure>
            {title}
            {setare}
            {option}
           
          </div>
     
      
    )
}
export default DryFoodCart