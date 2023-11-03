import './Modal.css'
import {PiX}from 'react-icons/pi'
function Modal({setShowModal}) {

  return (
    <div className='bg-modal modal' >
        <div className="modal-content " >
    <div className="relative">
    <PiX  className='absolute right-0 text-[24px] ' onClick={()=>setShowModal(false)}/>
    </div>
            <h2 >Удалить объявление</h2>
            <p>Вы пытаетесь удалить объявление. Это означает, что вы потеряете кандидатов, связанных с этим объявлением.</p>
      <div className="flex justify-end gap-[10px]">
      <button className='pl-4 pr-4 pt-2 pb-2 border rounded-[30px] bg-red-700 text-white'>Удалить</button>
            <button className='pl-4 pr-4 pt-2 pb-2 border rounded-[30px] ' onClick={()=>setShowModal(false)}>Отмена</button>
      </div>
        </div>


    </div>
  )
  }
export default Modal