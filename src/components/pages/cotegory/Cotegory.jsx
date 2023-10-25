import React from 'react'
import styles from '../../styles/style'
import './cotegory.css'

const Cotegory = () => {
    const contents=[
        {
            link:`https://thumbs.dreamstime.com/b/blue-lightning-abstract-electrical-background-195170325.jpg`,
            name:'Искусство, развлечение',
            id:1,
            вакансии:322
        },
        {
            link:`https://thumbs.dreamstime.com/b/blue-lightning-abstract-electrical-background-195170325.jpg`,
            name:'Искусство, развлечение',
            id:2,
            вакансии:322
        },
        {
            link:`https://thumbs.dreamstime.com/b/blue-lightning-abstract-electrical-background-195170325.jpg`,
            id:3,
            name:'Искусство, развлечение',
            вакансии:322
        },
        {
            link:`https://thumbs.dreamstime.com/b/blue-lightning-abstract-electrical-background-195170325.jpg`,
            id:4,
            name:'Искусство, развлечение',
            вакансии:322
        },
    ]
  return (
    <div className='cotegory bg-[#F4F6FF] pb-[100px] pt-[69px]'>
        <div className={`${styles.container}   `}>
           <div className="w-[1180px] m-auto">
           <h3 className='title  mb-[70px]'>Популярные категории</h3>
            <div className="wrapper flex flex-wrap gap-[41px]">
                {
                    contents.map((content)=>{
                        return(
                            <div  key={content.id} className={`w-[360px] h-[130px] overflow-hidden border rounded-[20px]  bg-[#F8F8FA] flex flex-col justify-center items-center relative `}>
                                <img src={content.link} alt="image" className='absolute left-[-15px] rounded-[50%] w-[80px] h-[80px] top-[-15px] overflow-y-hidden' />
                              <div className="">
                              <h3 className='cotegoryTitle'>{content.name}</h3>
                                <p className='cotegryPh'>{content.вакансии} вакансии</p>
                              </div>
                            </div>
                        )
                    })
                }
            </div>
           </div>
        </div>
    </div>
  )
}

export default Cotegory