'use client'
import React, { useState } from 'react'
import styles from './Product.module.scss'
import fish from '../../assets/fish.png'
import Image from 'next/image'
import sushi from '../../assets/sushi.png'
import arrow from '../../assets/arrow-gray.png'
import cart from '../../assets/cart.png'
import FavouriteIco from '@/src/components/svgs/FavouriteSvg'
import Switch from '@/src/components/ui/switch/Switch'
import { usePathname } from 'next/navigation'
import { useMutation, useQuery } from '@tanstack/react-query'
import { ProductService } from '@/src/services/product.service'
import classNames from 'classnames'
import { IngredientsService } from '@/src/services/ingredients.service'
import { URL } from '@/src/api/api'
const Product = () => {
	const pathName = usePathname()

	const productIdByPathName = pathName.split('/')[3]

	const {
		data: product,
		isLoading: isLoadingProduct,
		refetch: refetchProduct,
	} = useQuery({
		queryKey: ['get-by-id-product'],
		queryFn: () => ProductService.getById(productIdByPathName),
	})
	const [switchState, setSwitchState] = useState(true)

	const {
		data: favorites,
		isLoading: isLoadingFavorites,
		refetch: refetchFavorites,
	} = useQuery({
		queryKey: ['get-favorite-by-acc-id'],
		queryFn: () => ProductService.getFavoriteById(),
	})

	const { data: ingredients, isLoading: isLoadingIngrediens } = useQuery({
		queryKey: ['get-all-ingredients'],
		queryFn: () => IngredientsService.getAll(),
	})

	console.log('ingredients', ingredients?.items)

	const { mutate } = useMutation({
		mutationKey: ['change-favorite'],
		mutationFn: (id: string | null | undefined) =>
			ProductService.changeFavorite(id),
		onSuccess: () => {
			refetchProduct()
			refetchFavorites()
		},
	})
	const checkFavoriteById = (id: string | null | undefined) => {
		return isLoadingFavorites
			? []
			: favorites?.items.find(item => item.productId == id)
			? true
			: false
	}

	const products = [
		{
			id: 0,
			name: 'Лосось',
			photo: fish,
		},
		{
			id: 1,
			name: 'Угорь',
			photo: fish,
		},
		{
			id: 2,
			name: 'Тунец',
			photo: fish,
		},
		{
			id: 3,
			name: 'Куриное филе',
			photo: fish,
		},
	]
	const descriptionUpdate = product?.item.description.toLowerCase().split(', ')

	const ingredientsView = isLoadingIngrediens
		? []
		: ingredients?.items.filter(item =>
				descriptionUpdate?.includes(item.name.toLowerCase())
		  )
	console.log(descriptionUpdate)
	console.log('ingrediesntView', ingredientsView)
	return (
		<div className={styles.product}>
			<div className={styles.product__container}>
				<div className={styles.product__content}>
					<div className={styles.product__content__left}>
						<Image
							src={`${URL}product/file/sushies/${product?.item.photoPath}`}
							width={645}
							height={416}
							alt={'item'}
							style={{ width: '100%', height: '100%' }}
						/>
					</div>
					<div className={styles.product__content__right}>
						<div className={styles.product__content__right__tags}>
							<div className={styles.product__content__right__tags__hit}>
								<h3>Hit</h3>
							</div>
							<div className={styles.product__content__right__tags__new}>
								<h3>New</h3>
							</div>
						</div>
						<h3 className={styles.product__content__right__title}>
							{product?.item.name}
						</h3>
						<p className={styles.product__content__right__price}>
							Вес: {product?.item.weight} г
						</p>
						<span className={styles.product__content__right__list}>
							Состав:
						</span>
						<div style={{ position: 'relative' }}>
							<div
								className={styles.product__content__right__list__items}
								style={{ overflow: 'hidden' }}
							>
								{ingredientsView?.length == 0 ? (
									<p>{product?.item.description}</p>
								) : (
									ingredientsView?.map(view => (
										<div
											className={
												styles.product__content__right__list__items__item
											}
										>
											<div style={{ width: '100px', height: '60px' }}>
												<Image
													src={`${URL}product/file/sushies/${view.photoPath}`}
													width={64}
													height={64}
													alt='product'
												/>
											</div>

											<p>{view.name}</p>
										</div>
									))
								)}
							</div>
							<button
								className={styles.product__content__right__list__items__arrow}
							>
								<Image src={arrow} alt={'arrow'} />
							</button>
						</div>

						<div className={styles.product__content__right__switch}>
							<Switch label='Notifications' />
							<p>Безлактозное</p>
						</div>
						<div className={styles.product__content__right__footer}>
							<h3>
								{product?.item.price}
								<span>тг</span>
							</h3>
							<button
								className={styles.product__content__right__footer__basket}
							>
								<p>В корзину</p>
								<Image src={cart} alt={'cart'} />
							</button>
							<button
								className={classNames(
									checkFavoriteById(product?.item.id)
										? styles.product__content__right__footer__favoriteaccept
										: styles.product__content__right__footer__favorite
								)}
								// className={styles.product__content__right__footer__favorite}
								onClick={() => mutate(product?.item.id)}
							>
								<FavouriteIco fill={'#ffffff'} color={'#ffffff'} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Product
