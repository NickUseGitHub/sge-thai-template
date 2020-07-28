import React from 'react'
import MemberPoints from '../components/Me/MemberPoints'
import Reward from '../components/Me/Reward/Reward'
import useRouterHistory from '../hooks/useRouterHistory'
import { rewards } from '../configs'

export default function Rewards() {
  const goto = useRouterHistory()

  const gotoCartPage = () => goto('/cart')

  return (
    <div className="m-auto antialiased font-sans font-serif font-mono text-center">
      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <MemberPoints />
        </div>

        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <h1 className="w-full text-3xl text-left underline px-2 md:px-0">
            ของสมนาคุณ
          </h1>

          <div className="w-full flex flex-wrap flex-col md:flex-row mt-10 p-2">
            {rewards.map((reward) => (
              <Reward
                key={reward.title}
                title={reward.title}
                thumbnail={reward.thumbnail}
              />
            ))}
          </div>

          <div className="w-full">
            <button
              className="m-2 bg-green-600 hover:bg-green-900 p-2 text-white rounded-full px-10"
              onClick={gotoCartPage}
            >
              Get Rewards
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
