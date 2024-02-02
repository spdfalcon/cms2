import { useTranslation } from 'react-i18next'
import Headerofpages from '../../../../components/module/Headerofpages/Headerofpages'
import Button from '../../../../components/module/Button/Button'

export default function Createcoupon() {
    const {t} = useTranslation()
  return (
    <div className='p-8'>
      <div className='header '>
        <Headerofpages title={t('createcoupon')} back={true} to={'/admin/coupons'}>
            <Button type='White' size='sm'>{t('save')}</Button>
            <Button type='Primary' size='sm'>{t('cancel')}</Button>
        </Headerofpages>
      </div>
      <div className='main bg-white p-8 rounded-md mt-10'>
        <div className='mainup border-b pb-10'>
            <div className='mainupup'>
                <h2 className='font-bold'>{t('couponinformation')}</h2>
                <h2 className='text-a_general-80'>{t('codewillbeusedbyusersincheckout')}</h2>
            </div>
            <div className='mainupdown grid grid-cols-1 md:grid-cols-2 mt-5 gap-5'>
                <div className='flex flex-col gap-2'>
                    <label className='text-a_general-80 text-sm' htmlFor="createcouponcouponcode">{t('couponcode')}</label>
                    <input className='border outline-none py-1 px-3 rounded-md w' placeholder={`${t('shipfree')} 20`} type="text" name="" id="createcouponcouponcode" />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-a_general-80 text-sm' htmlFor="createcouponcouponname">{t('couponname')}</label>
                    <input className='border outline-none py-1 px-3 rounded-md w' placeholder={`${t('freeshipping')}`} type="text" name="" id="createcouponcouponname" />
                </div>
            </div>
        </div>
        <div className='mainmid py-5'>
            <div className='mainmidup'>
                <h2 className='font-bold'>{t('coupontype')}</h2>
                <p className='text-a_general-80 text-sm'>{t('typeofcouponyouwanttocreate')}</p>
            </div>
            <div className='mainmiddown mt-5'>
                <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <li>
                        <input className='hidden peer' type="radio" name="Coupon Type" id="createcouponfixeddiscount" />
                        <label className='flex flex-col justify-center items-center rounded-md px-7 py-6  peer-checked:border-2 peer-checked:border-a_primary-100 peer-checked:text-a_primary-100 border hover:bg-slate-50 cursor-pointer' htmlFor="createcouponfixeddiscount">
                        <i className="bi bi-cash"></i>
                        <p>{t('fixeddiscount')}</p>
                        </label>
                    </li>
                    <li>
                        <input className='hidden peer' type="radio" name="Coupon Type" id="createcouponpercentagediscount" />
                        <label className='flex flex-col justify-center items-center rounded-md px-7 py-6  peer-checked:border-2 peer-checked:border-a_primary-100 peer-checked:text-a_primary-100 border hover:bg-slate-50 cursor-pointer' htmlFor="createcouponpercentagediscount">
                        <i className="bi bi-basket3"></i>
                        <p>{t('percentagediscount')}</p>
                        </label>
                    </li>
                    <li>
                        <input className='hidden peer' type="radio" name="Coupon Type" id="createcouponfreeshipping" />
                        <label className='flex flex-col justify-center items-center rounded-md px-7 py-6  peer-checked:border-2 peer-checked:border-a_primary-100 peer-checked:text-a_primary-100 border hover:bg-slate-50 cursor-pointer' htmlFor="createcouponfreeshipping">
                        <i className="bi bi-truck"></i>
                        <p>{t('freeshipping')}</p>
                        </label>
                    </li>
                    <li>
                        <input className='hidden peer' type="radio" name="Coupon Type" id="createcouponpricediscount" />
                        <label className='flex flex-col justify-center items-center rounded-md px-7 py-6  peer-checked:border-2 peer-checked:border-a_primary-100 peer-checked:text-a_primary-100 border hover:bg-slate-50 cursor-pointer' htmlFor="createcouponpricediscount">
                        <i className="bi bi-ticket"></i>
                        <p>{t('pricediscount')}</p>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
        <div className='maindown'>
            <div className='maindownup grid grid-cols-1 md:grid-cols-2 mt-5 gap-5'>
                <div className='flex flex-col gap-2'>
                    <label className=' text-a_general-80 text-sm' htmlFor="createcoupondiscountvalue">{t('discountvalue')}</label>
                    <input className='border outline-none py-1 px-3 rounded-md w' placeholder={`${t('amount')}`} type="text" name="" id="createcoupondiscountvalue" />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className=' text-a_general-80 text-sm' htmlFor="createcouponappliesto">{t('appliesto')}</label>
                    <input className='border outline-none py-1 px-3 rounded-md w' placeholder={`${t('choose')}`} type="text" name="" id="createcouponappliesto" />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className=' text-a_general-80 text-sm' htmlFor="createcouponduration">{t('duration')}</label>
                    <input className='border outline-none py-1 px-3 rounded-md w' placeholder={`${t('setduration')}`} type="text" name="" id="createcouponduration" />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className=' text-a_general-80 text-sm' htmlFor="createcouponusagelimits">{t('usagelimits')}</label>
                    <input className='border outline-none py-1 px-3 rounded-md w' placeholder={`${t('amountofuses')}`} type="text" name="" id="createcouponusagelimits" />
                </div>
                <div className='flex gap-2  items-center'>
                    <input className='border outline-none py-1 px-3 rounded-md w' type="checkbox" name="" id="createcoupondontsetduration" />
                    <label className='font-bold text-sm' htmlFor="createcoupondontsetduration">{t('dontsetduration')}</label>
                </div>
                <div className='flex gap-2  items-center'>
                    <input className='border outline-none py-1 px-3 rounded-md w' type="checkbox" name="" id="createcoupondontlimitamoutofuses" />
                    <label className='font-bold text-sm' htmlFor="createcoupondontlimitamoutofuses">{t('dontlimitamoutofuses')}</label>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}
