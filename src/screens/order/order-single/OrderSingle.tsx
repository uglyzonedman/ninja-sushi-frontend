'use client'
import React, { useState } from 'react'
import styles from './OrderSingle.module.scss'
import { usePathname } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { OrderService } from '@/src/services/order.service'
import { PaymentTypes } from '@/src/enums/enum'
import ArrowIco from '@/src/components/svgs/ArrowSvg'
import Image from 'next/image'
import ProfileHistoreOrderItem from '../../profile/profile-histore-order/profile-histore-order-item/ProfileHistoreOrderItem'
import OrderSingleProduct from './order-single-product/OrderSingleProduct'
import orderArrow from '../../../assets/order-arrow.png'
import { URL } from '@/src/api/api'
const OrderSingle = () => {
	const pathName = usePathname()
	const idOrder = pathName.split('/')[2]
	const { data: order, isLoading: isLoadingOrder } = useQuery({
		queryKey: ['get-by-id-order'],
		queryFn: () => OrderService.getOrderById(idOrder),
	})

	console.log('order', order)

	const checkPayment = PaymentTypes.find(type => type.key == order?.typePayment)

	const [currentIndex, setCurrentIndex] = useState<string | null | any>(null)
	return (
		<div className={styles.order__single}>
			<div className={styles.order__single__container}>
				<div className={styles.order__single__content}>
					<div className={styles.order__single__content__left}>
						<h3>
							Ваш заказ под номером <span>#{idOrder}</span> успешно создан
						</h3>
					</div>
					<div className={styles.order__single__content__right}>
						<h3 className={styles.order__single__content__right__title}>
							Информация о доставке
						</h3>
						<div className={styles.order__single__content__right__items}>
							<div
								className={styles.order__single__content__right__items__item}
							>
								<p
									className={
										styles.order__single__content__right__items__item__key
									}
								>
									Адрес:
								</p>
								<p
									className={
										styles.order__single__content__right__items__item__value
									}
								>
									{order?.Address.street} {order?.Address.streetNumber}, под.{' '}
									{order?.Address.entrance}, кв. {order?.Address.flat}, э.{' '}
									{order?.Address.floor}
								</p>
							</div>
							<div
								className={styles.order__single__content__right__items__item}
							>
								<p
									className={
										styles.order__single__content__right__items__item__key
									}
								>
									Способ оплаты:
								</p>
								<p
									className={
										styles.order__single__content__right__items__item__value
									}
								>
									{checkPayment?.name}
								</p>
							</div>
							<div
								className={styles.order__single__content__right__items__item}
							>
								<p
									className={
										styles.order__single__content__right__items__item__key
									}
								>
									Сумма к оплате:
								</p>
								<p
									className={
										styles.order__single__content__right__items__item__value
									}
								>
									{order?.totalSum} тг
								</p>
							</div>
							<div className={styles.order__single__content__right__notes}>
								<h3
									className={styles.order__single__content__right__notes__title}
								>
									Примечание:
								</h3>
								<p
									className={
										styles.order__single__content__right__notes__description
									}
								>
									{order?.leaveItAtTheDoor && 'Оставить у двери'}
								</p>
								<p
									className={
										styles.order__single__content__right__notes__description
									}
								>
									{order?.dontRingTheDoorbell && 'Не звонить в дверь'}
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.order__single__products}>
					<div className={styles.order__single__products__header}>
						<div className={styles.order__single__products__header__left}>
							<button
								className={styles.order__single__products__header__left__arrow}
								onClick={() => {
									setCurrentIndex((prev: any) =>
										prev == order?.id ? null : order?.id
									)
								}}
							>
								{currentIndex == order?.id ? (
									<Image
										src={orderArrow}
										alt='order-arrow'
										width={20}
										height={11}
										style={{ rotate: '180deg' }}
									/>
								) : (
									<Image
										src={orderArrow}
										alt='order-arrow'
										width={20}
										height={11}
									/>
								)}
							</button>
							<div
								className={styles.order__single__products__header__left__info}
							>
								<span>20 мая 2020</span>
								<p># 86352</p>
							</div>
							<div
								className={styles.order__single__products__header__left__items}
							>
								{order?.OrderItem.slice(0, 4).map(item => (
									<div
										className={
											styles.order__single__products__header__left__items__item
										}
									>
										<Image
											alt='test'
											width={54}
											height={54}
											src={`${URL}product/file/sushies/${item.Product.photoPath}`}
										/>
									</div>
								))}
							</div>
						</div>
						<div className={styles.order__single__products__header__right}>
							<div
								className={styles.order__single__products__header__right__item}
							>
								<span>Кол-во</span>
								<p>7</p>
							</div>
							<div
								className={styles.order__single__products__header__right__item}
							>
								<span>Цена</span>
								<p>{order?.totalSum} тг</p>
							</div>
						</div>
					</div>
					{currentIndex == order?.id && (
						<div className={styles.order__single__products__body}>
							{order?.OrderItem.map(item => (
								<OrderSingleProduct
									createdAt={item.Product.createdAt}
									description={item.Product.description}
									id={item.Product.id}
									name={item.Product.name}
									photoPath={item.Product.photoPath}
									price={item.Product.price}
									type={item.Product.type}
									updatedAt={item.Product.updatedAt}
									volume={item.Product.volume}
									weight={item.Product.weight}
									quantity={item.quantity}
								/>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default OrderSingle
