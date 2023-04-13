import React,{useState,useEffect} from 'react'
import CROP from '../static/crop'
import * as tf from '@tensorflow/tfjs';
function Recommended_Crop() {
    const [loadmore, setLoadmore] = useState(false)
    const [cropdata, setCropdata] = useState([])
      const reccomdcrop=async()=>{
        const model = await tf.loadGraphModel('cropmodel/model.json');
        
        console.log(model);
//         let img = $('#temp').get(0);
// let tensorr1=tf.browser.fromPixels(img).resizeNearestNeighbor([224,224]).toFloat();
// const offset = tf.scalar(255.0);
// const normalized = tf.scalar(1.0).sub(tensorr1.div(offset));

// const tensorr = normalized.expandDims(0)
// console.log(tensorr)

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((e)=>{
      fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${e.coords.latitude}&lon=${e.coords.longitude}&appid=1ae67afbcfd2c8ace165befd341a1d70&units=metric`
        )
          .then((res) => res.json())
          .then(async(data) => {
            const tensorr=tf.tensor([[50.55 ,53.36 ,48.14 ,data?.main?.temp,data?.main?.humidity,0.77,200]])
let predictions=await model.predict(tensorr).data()

let tensorres= predictions
console.log(tensorres)
let top = Array.from(tensorres).map(function (p, i) { // this is Array.map
return {
 probability: p,
// we are selecting the value from the obj
className:CROP[i]
};
}).sort(function (a, b) {
return b.probability - a.probability;
})
console.log(top);
setCropdata(top)
          })
          .catch((error) => console.log(error.message));
  });
} else {
 alert( "Geolocation is not supported by this browser.");
}


      }
      useEffect(() => {
       
        reccomdcrop()

      }, [])
      const host="http://localhost:5000"
  return ( 
    <div className='container m-auto px-7'>
        <div className='text-center font-bold text-xl'>
            Recommended Crop for you
        </div>
        <div className='my-5 font-bold'>TOP 5</div>
      <div>      
<ol class="relative border-l border-gray-200 dark:border-gray-700">                  
   { 
   cropdata?.slice(0,5)?.map((e,i)=>{
return (
    <div key={i}>
<li class="mb-10 ml-6">            
        <span class="absolute flex items-center justify-center w-3 h-3 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <svg height="15px" width="15px" version="1.1" id="_x35_" xmlns="http://www.w3.org/2000/svg"  
	 viewBox="0 0 512 512"  >
<g>
	<g>
		<path style={{fill:"#75A874"}} d="M461.044,46.548C331.271-11.868,184.378,3.571,89.951,98.005
			C-0.94,188.893-18.62,328.363,32.254,454.389c-8.792,8.638-16.89,16.648-23.973,23.734c-5.857,5.857,0,0,0,0l21.188,21.188
			c1.946-1.945,0,0,0,0c7.083-7.087,15.092-15.181,23.731-23.977c126.023,50.878,265.493,33.194,356.38-57.693
			C504.014,323.207,519.46,176.315,461.044,46.548z"/>
		<path style={{fill:"#5AA25A"}} d="M17.463,511.318C16.697,512.083,16.415,512.361,17.463,511.318L17.463,511.318z"/>
		<path style={{fill:"#5AA25A"}} d="M21.188,507.592c-0.808,0.808-1.441,1.437-2.003,2.002
			C20.219,508.565,21.188,507.592,21.188,507.592z"/>
		<path style={{fill:"#5AA25A"}} d="M18.568,510.209c-0.393,0.393-0.765,0.765-1.069,1.073
			C17.763,511.017,18.135,510.646,18.568,510.209z"/>
	</g>
	<g>
		<g>
			<path style={{fill:"#79C17A"}} d="M89.951,85.799C-4.491,180.233-19.93,327.126,38.493,456.892l422.55-422.55
				C331.271-24.074,184.378-8.635,89.951,85.799z"/>
			<path style={{fill:"#67B765"}} d="M409.579,405.435c-94.434,94.434-241.327,109.88-371.086,51.457l422.55-422.55
				C519.46,164.108,504.014,311.001,409.579,405.435z"/>
		</g>
		<path style={{fill:"#5AA25A"}} d="M21.188,495.386c3.168-1.988,3.168-1.988,8.28-8.281
			C131.175,385.391,408.442,91.169,417.631,77.754C404.209,86.936,109.987,364.21,8.281,465.917C2.424,471.773,0,474.19,0,474.19
			L21.188,495.386z"/>
		<path style={{fill:"#5AA25A"}} d="M267.027,236.353c0,0,0,0,0-9.311c0-41.882-8.031-159.557-10.025-164.205
			c-2.009,4.648-10.033,122.323-10.033,164.205c-0.007,9.311-0.007,9.311-0.007,9.311H267.027z"/>
		<path style={{fill:"#5AA25A"}} d="M160.479,342.901c0,0,0,0,0-9.31c0-41.883-8.03-159.557-10.033-164.205
			c-2.009,4.647-10.033,122.329-10.033,164.205c0,9.31,0,9.31,0,9.31H160.479z"/>
		<path style={{fill:"#5AA25A"}} d="M260.813,230.139c0,0,0,0,9.31,0c41.882,0,159.557,8.023,164.205,10.033
			c-4.648,2.009-122.323,10.033-164.205,10.033c-9.31,0-9.31,0-9.31,0V230.139z"/>
		<path style={{fill:"#5AA25A"}} d="M154.265,336.686c0,0,0,0,9.311,0c41.875,0,159.557,8.031,164.205,10.033
			c-4.648,2.01-122.33,10.033-164.205,10.033c-9.311,0.007-9.311,0.007-9.311,0.007V336.686z"/>
	</g>
</g>
</svg>
        </span>
        <div className='w-[50%] m-auto'> 
          <img src={`${host}/static/${e?.className?.split(' ')[0]}.jpg`} alt="temp" className='w-full' />
        </div>
        <h3 class="flex items-center mb-1 text-xl font-semibold text-gray-900 dark:text-black">{e?.className}<span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Know More</span></h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{`${(e?.probability*100).toFixed(2)} %`}</time>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
      
    </li>
    </div>
    
)
   })
   }
    
</ol>
</div>
<section>
  <div className='cursor-pointer my-5 text-center'>
    <button onClick={()=>setLoadmore(!loadmore)} className='bg-gray-200 px-2 py-2 font-semibold rounded-md'>
    <div>
      {loadmore===false?"expand":"collapse"}
    </div>
    </button>
    
  </div>
  {
    loadmore&& <div>
      <ol class="relative border-l border-gray-200 dark:border-gray-700">

{cropdata?.slice(5,10)?.map((e,i)=>{

  return (
    <div key={i}>
    <li class="mb-10 ml-6">            
    <span class="absolute flex items-center justify-center w-3 h-3 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
    <svg height="15px" width="15px" version="1.1" id="_x35_" xmlns="http://www.w3.org/2000/svg"  
 viewBox="0 0 512 512"  >
<g>
<g>
    <path style={{fill:"#75A874"}} d="M461.044,46.548C331.271-11.868,184.378,3.571,89.951,98.005
        C-0.94,188.893-18.62,328.363,32.254,454.389c-8.792,8.638-16.89,16.648-23.973,23.734c-5.857,5.857,0,0,0,0l21.188,21.188
        c1.946-1.945,0,0,0,0c7.083-7.087,15.092-15.181,23.731-23.977c126.023,50.878,265.493,33.194,356.38-57.693
        C504.014,323.207,519.46,176.315,461.044,46.548z"/>
    <path style={{fill:"#5AA25A"}} d="M17.463,511.318C16.697,512.083,16.415,512.361,17.463,511.318L17.463,511.318z"/>
    <path style={{fill:"#5AA25A"}} d="M21.188,507.592c-0.808,0.808-1.441,1.437-2.003,2.002
        C20.219,508.565,21.188,507.592,21.188,507.592z"/>
    <path style={{fill:"#5AA25A"}} d="M18.568,510.209c-0.393,0.393-0.765,0.765-1.069,1.073
        C17.763,511.017,18.135,510.646,18.568,510.209z"/>
</g>
<g>
    <g>
        <path style={{fill:"#79C17A"}} d="M89.951,85.799C-4.491,180.233-19.93,327.126,38.493,456.892l422.55-422.55
            C331.271-24.074,184.378-8.635,89.951,85.799z"/>
        <path style={{fill:"#67B765"}} d="M409.579,405.435c-94.434,94.434-241.327,109.88-371.086,51.457l422.55-422.55
            C519.46,164.108,504.014,311.001,409.579,405.435z"/>
    </g>
    <path style={{fill:"#5AA25A"}} d="M21.188,495.386c3.168-1.988,3.168-1.988,8.28-8.281
        C131.175,385.391,408.442,91.169,417.631,77.754C404.209,86.936,109.987,364.21,8.281,465.917C2.424,471.773,0,474.19,0,474.19
        L21.188,495.386z"/>
    <path style={{fill:"#5AA25A"}} d="M267.027,236.353c0,0,0,0,0-9.311c0-41.882-8.031-159.557-10.025-164.205
        c-2.009,4.648-10.033,122.323-10.033,164.205c-0.007,9.311-0.007,9.311-0.007,9.311H267.027z"/>
    <path style={{fill:"#5AA25A"}} d="M160.479,342.901c0,0,0,0,0-9.31c0-41.883-8.03-159.557-10.033-164.205
        c-2.009,4.647-10.033,122.329-10.033,164.205c0,9.31,0,9.31,0,9.31H160.479z"/>
    <path style={{fill:"#5AA25A"}} d="M260.813,230.139c0,0,0,0,9.31,0c41.882,0,159.557,8.023,164.205,10.033
        c-4.648,2.009-122.323,10.033-164.205,10.033c-9.31,0-9.31,0-9.31,0V230.139z"/>
    <path style={{fill:"#5AA25A"}} d="M154.265,336.686c0,0,0,0,9.311,0c41.875,0,159.557,8.031,164.205,10.033
        c-4.648,2.01-122.33,10.033-164.205,10.033c-9.311,0.007-9.311,0.007-9.311,0.007V336.686z"/>
</g>
</g>
</svg>
    </span>
    <div className='w-[50%] m-auto'> 
          <img src={`${host}/static/${e?.className?.split(' ')[0]}.jpg`} alt="temp" className='w-full' />
        </div>
    <h3 class="flex items-center mb-1 text-xl font-semibold text-gray-900 dark:text-black">{e?.className}<span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Know More</span></h3>
    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{`${(e?.probability*100).toFixed(2)} %`}</time>
    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
  
</li>
</div>
  )
})  
  }
</ol>
    </div>
      
      }
</section>
    </div>
  )
}

export default Recommended_Crop