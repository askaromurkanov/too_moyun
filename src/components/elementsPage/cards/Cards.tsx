import { ICards, INews } from '@/interfaces/news.interface'
import { NewsService } from '@/services/newsData.service'
import Image from 'next/image'
import { FC } from 'react'

const Cards: FC<ICards> = ({cards}) => {
	console.log(cards);
	
	return (
		<div className='flex w-1220 flex-wrap justify-between text-center text-2xl font-bold text-cardColor'>
			{cards.map(el => {
				return (
					<div className='flex flex-col w-388 mt-6'>
						<Image
							src={`https://aimesh777.pythonanywhere.com/${el.img}`}
							width={388}
							height={388}
							alt=''
						/>
						<p>
							{el.text}
						</p>
					</div>
				)
			})}
		</div>
	)
}

export default Cards